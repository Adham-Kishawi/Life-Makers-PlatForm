<?php

namespace App\Filament\Concerns;

trait HasNavigationBadge
{
    public static function getNavigationBadge(): ?string
    {
        return static::getEloquentQuery()->count();
    }

    public static function getNavigationBadgeColor(): ?string
    {
        return static::getEloquentQuery()->count() ? 'primary' : 'gray';
    }
}