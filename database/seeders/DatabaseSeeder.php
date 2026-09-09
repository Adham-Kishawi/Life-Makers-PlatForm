<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $password = env('SEED_ADMIN_PASSWORD', Str::random(16));
        $user = User::firstOrCreate(
            ['email' => 'admin@gmail.com'],
            [
                'name' => 'صناع الحياة أدمن',
                'password' => bcrypt($password),
                'national_identity' => '12345678901234',
                'phone_number' => '01012345678',
                'address' => 'الإسماعيلية',
                'detailed_address' => 'شارع العشريني',
                'job' => 'مدير النظام',
                'qualification' => 'بكالوريوس',
                'birthday' => '2000-01-01',
            ]
        );

        if ($user->wasRecentlyCreated) {
            $this->command->info("Admin account created: admin@gmail.com / {$password}");
        }

        $this->call(ShieldSeeder::class);
        $this->call(CommitteeSeeder::class);
        $role = \Spatie\Permission\Models\Role::firstOrCreate(['name' => 'super_admin', 'guard_name' => 'web']);
        $user->assignRole($role);
    }
}
