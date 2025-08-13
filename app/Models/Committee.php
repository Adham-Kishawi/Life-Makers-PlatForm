<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Committee extends Model
{
    protected $fillable = ['name', 'description', 'icon', 'data'];
    protected $casts = ['data' => 'array'];

    public function getRouteKeyName()
    {
        return 'name';
    }
}
