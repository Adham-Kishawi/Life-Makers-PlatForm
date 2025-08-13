<?php

namespace App\Filament\Resources\UserResource\Table\Columns;

use Filament\Tables;

class Roles extends Column
{
    public static function make(): Tables\Columns\TextColumn
    {
        return Tables\Columns\TextColumn::make('roles.name')
            ->icon('heroicon-o-shield-check')
            ->color('success')
            ->toggleable()
            ->placeholder('unset')
            ->badge()
            ->label(trans('filament-users::user.resource.roles'));
    }
}
