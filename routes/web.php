<?php

use App\Models\Committee;
use App\Models\Slider;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::prefix('account')->group(function(){
    Route::post('register', function(Request $request){
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'national_identity' => 'required|string|max:20|unique:users,national_identity',
            'phone_number' => 'nullable|string|max:20',
            'address' => 'nullable|string|max:255',
            'detailed_address' => 'nullable|string|max:255',
            'email' => 'required|email|max:255|unique:users,email',
            'qualification' => 'nullable|string|max:255',
            'birthday' => 'nullable|date',
            'job' => 'nullable|string|max:255',
            'password' => 'required|string|min:8|confirmed',
            'personal_photo' => 'nullable|image|max:5120',
        ]);

        $photoPath = null;
        if ($request->hasFile('personal_photo')) {
            $photoPath = $request->file('personal_photo')->store('users', 'public');
        }

        $user = User::create([
            ...$validated,
            'personal_photo' => $photoPath,
            'password' => Hash::make($validated['password']),
        ]);

        Auth::login($user);
        $request->session()->regenerate();

        return redirect('/');
    })->middleware('throttle:5,10');

    Route::post('login', function(Request $request){
        $credentials = $request->validate([
            'national_identity' => 'required|string',
            'password' => 'required|string',
        ]);

        $user = User::where('national_identity', $credentials['national_identity'])
            ->orWhere('email', $credentials['national_identity'])
            ->first();

        if ($user && Hash::check($credentials['password'], $user->password)) {
            Auth::login($user);
            $request->session()->regenerate();
            return redirect()->intended('/');
        }

        return back()->withErrors([
            'national_identity' => 'بيانات الاعتماد غير متطابقة مع سجلاتنا.',
        ]);
    })->middleware('throttle:10,1');

    Route::post('logout', function(Request $request){
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect('/');
    });
});

use App\Models\Event;

Route::get("/", fn() => Inertia::render('Home/index', [
    'sliders' => Slider::orderBy('order')->get(),
    'committee' => Committee::orderBy('order')->get(),
    'events' => Event::orderBy('order')->get(),
]));

Route::get("/committee/{committee}", function($committee) {
    $decoded = urldecode($committee);
    $model = Committee::where('name', $decoded)
        ->orWhere('name', $committee)
        ->orWhere('id', $committee)
        ->orWhere('name', 'LIKE', "%{$decoded}%")
        ->first();

    if (!$model) {
        $slugMap = [
            'Attraction' => 'الجذب والتطوع',
            'Beast_friend' => 'أحسن صاحب',
            'Leader' => 'قدوة وبناء القادة',
            'Media' => 'الميديا والإعلام',
            'Hnwslak' => 'حملة هنوصلك',
            'Kids' => 'أنشطة الأطفال والتعليم',
            'Exhibitions' => 'المعارض والكساء',
            'Development' => 'التنمية والمشروعات',
            'Relief' => 'الإغاثة والرعاية الصحية',
            'Support' => 'الدعم والتواصل',
            'IT' => 'IT وضبط العضوية',
            'Grants' => 'المنح والشراكات',
            'Awareness' => 'التوعية المجتمعية',
        ];
        if (isset($slugMap[$committee]) || isset($slugMap[$decoded])) {
            $targetName = $slugMap[$committee] ?? $slugMap[$decoded];
            $model = Committee::where('name', $targetName)->first();
        }
    }

    if (!$model) {
        $model = Committee::first();
    }

    return Inertia::render('Files/index', ['props' => $model]);
});

Route::get("About", fn() => Inertia::render('About/index'));

Route::get("Login", fn() => Inertia::render('Login/index'));

Route::get("Contact", fn() => Inertia::render('Contact/index'));
