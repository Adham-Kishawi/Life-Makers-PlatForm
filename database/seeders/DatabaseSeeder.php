<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Artisan;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();
        
        // $this->call(CenterSeeder::class);
        // $this->call(CommitteeSeeder::class);
        
        User::factory()->create([
            'name' => 'admin',
            'email' => 'admin@gmail.com',
        ]);
        
        $this->call(ShieldSeeder::class);
        Artisan::call("shield:super-admin");
    }
}
