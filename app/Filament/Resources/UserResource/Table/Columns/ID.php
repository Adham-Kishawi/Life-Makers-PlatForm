<?php

namespace App\Filament\Resources\UserResource\Table\Columns;

use Filament\Tables;

class ID extends Column
{
    public static function make(): Tables\Columns\TextColumn
    {
        return Tables\Columns\TextColumn::make('id')
        ->rowIndex()
        ->label(trans('filament-users::user.resource.id'));

        // return Tables\Columns\TextColumn::make('id')
        //     ->sortable()
        //     ->label(trans('filament-users::user.resource.id'));
    }
}
