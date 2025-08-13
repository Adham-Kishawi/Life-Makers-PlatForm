<?php
namespace App\CustomPlugins;

use BezhanSalleh\FilamentShield\FilamentShieldPlugin as mainFilamentShieldPlugin;
use BezhanSalleh\FilamentShield\Support\Utils;
use Filament\Contracts\Plugin;
use Filament\Panel;
use Filament\Support\Concerns\EvaluatesClosures;

class FilamentShieldPlugin extends mainFilamentShieldPlugin
{
    public function register(Panel $panel): void
    {
        // if (! Utils::isResourcePublished($panel)) {
        //     $panel->resources([
        //         Resources\RoleResource::class,
        //     ]);
        // }
    }
}