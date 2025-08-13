<?php

namespace App\CustomWidgets;

use Filament\Widgets\AccountWidget as MainAccountWidget;

class AccountWidget extends MainAccountWidget
{
    protected static ?int $sort = 1;

    protected static bool $isLazy = true;
    
    protected int | string | array $columnSpan = 2;
}
