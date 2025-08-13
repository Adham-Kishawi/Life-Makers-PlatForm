<?php

namespace App\Filament\Resources\UserResource\Table\Actions;

abstract class Action
{
    abstract public static function make(): \Filament\Tables\Actions\Action;
}
