<?php

namespace App\Filament\Widgets;

use App\Filament\Resources\CenterResource;
use App\Filament\Resources\CommitteeResource;
use App\Filament\Resources\SliderResource;
use App\Filament\Resources\UserResource;
use App\Models\Center;
use App\Models\Committee;
use App\Models\Slider;
use App\Models\User;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class MainWidget extends BaseWidget
{
    protected static ?int $sort = 2;
    
    protected function getStats(): array
    {
        return [
            Stat::make('Total Sliders', Slider::count())->url(SliderResource::getUrl(), true),
            Stat::make('Total Users', User::count())->url(UserResource::getUrl(), true),
            Stat::make('Total Committees', Committee::count())->url(CommitteeResource::getUrl(), true),
            Stat::make('Total Centers', Center::count())->url(CenterResource::getUrl(), true),
        ];
    }
}
