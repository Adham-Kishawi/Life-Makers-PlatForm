<?php

namespace App\Filament\Resources\UserResource\Table\Actions;

use Filament\Tables;

class EditAction extends Action
{
    public static function make(): Tables\Actions\Action
    {
        return Tables\Actions\EditAction::make()
            ->iconButton()
            ->tooltip(trans('filament-users::user.resource.title.edit'));
    }
}
