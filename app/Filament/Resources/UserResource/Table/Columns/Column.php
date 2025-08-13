<?php
namespace App\Filament\Resources\UserResource\Table\Columns;

abstract class Column
{
    abstract public static function make(): \Filament\Tables\Columns\Column;
}
