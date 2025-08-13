<?php

namespace App\Filament\Resources\UserResource\Table\Filters;

abstract class Filter
{
    abstract public static function make(): \Filament\Tables\Filters\BaseFilter;
}
