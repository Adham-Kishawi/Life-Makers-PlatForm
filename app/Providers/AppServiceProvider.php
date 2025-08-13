<?php

namespace App\Providers;

use App\Models\Committee;
use App\Models\Event;
use App\Models\Slider;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Inertia::share([
            'sliders' => Slider::orderBy('order', 'asc')->get(),
            'committee' => Committee::orderBy('order', 'asc')->get(),
            'events' => Event::orderBy('order', 'asc')->get(),
        ]);
    }
}
