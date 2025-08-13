<?php

use App\Models\Committee;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::prefix('account')->group(function(){
    Route::post('register', function(){
        dd(request()->all());
    });

    Route::post('login', function(){
        dd(request()->all());
    });
});

Route::get("/", fn() => Inertia::render('Home/index'));

Route::get("/committee/{committee}", fn(Committee $committee) => Inertia::render('Files/index', ['props' => $committee]));

Route::get("About", fn() => Inertia::render('About/index'));

Route::get("Login", fn() => Inertia::render('Login/index'));

// Route::get("Contact", fn() => Inertia::render('Contact/AllContact'));

// Route::get("/Attraction", fn() => Inertia::render('Files/Attraction'));
