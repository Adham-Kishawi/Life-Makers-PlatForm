<?php

namespace App\Filament\Resources\UserResource\Table\BulkActions;

use Filament\Tables\Actions\BulkAction;

abstract class Action
{
    abstract public static function make(): BulkAction;
}
