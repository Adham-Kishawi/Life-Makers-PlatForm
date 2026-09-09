<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class AuthRegisterTest extends TestCase
{
    use RefreshDatabase;

    private function validPayload(array $overrides = []): array
    {
        return array_merge([
            'name' => 'Test Volunteer',
            'national_identity' => '12345678901234',
            'phone_number' => '01012345678',
            'address' => 'الإسماعيلية',
            'email' => 'volunteer@example.com',
            'qualification' => 'بكالوريوس',
            'birthday' => '2000-01-01',
            'password' => 'password123',
            'password_confirmation' => 'password123',
        ], $overrides);
    }

    public function test_user_can_register_and_is_logged_in(): void
    {
        $response = $this->post('/account/register', $this->validPayload());

        $response->assertRedirect('/');
        $this->assertAuthenticated();
        $this->assertDatabaseHas('users', ['email' => 'volunteer@example.com']);
    }

    public function test_duplicate_national_identity_is_rejected(): void
    {
        User::create([
            'name' => 'Existing',
            'national_identity' => '12345678901234',
            'phone_number' => '01012345678',
            'address' => 'الإسماعيلية',
            'email' => 'existing@example.com',
            'qualification' => 'بكالوريوس',
            'birthday' => '2000-01-01',
            'password' => bcrypt('password123'),
        ]);

        $response = $this->post('/account/register', $this->validPayload());

        $response->assertSessionHasErrors('national_identity');
        $this->assertGuest();
    }

    public function test_short_password_is_rejected(): void
    {
        $response = $this->post('/account/register', $this->validPayload([
            'password' => 'short',
            'password_confirmation' => 'short',
        ]));

        $response->assertSessionHasErrors('password');
    }
}