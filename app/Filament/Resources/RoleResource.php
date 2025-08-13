<?php
namespace App\Filament\Resources;

use BezhanSalleh\FilamentShield\Resources\RoleResource as mainRoleResource;

class RoleResource extends mainRoleResource 
{
    public static function getNavigationGroup(): ?string
    {
        return "Settings";
    }
}