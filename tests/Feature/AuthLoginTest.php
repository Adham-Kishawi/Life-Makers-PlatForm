<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class AuthLoginTest extends TestCase
{
    use RefreshDatabase;

    private function makeUser(array $overrides = []): User
    {
        return User::create(array_merge([
            'name' => 'Test Volunteer',
            'national_identity' => '12345678901234',
            'phone_number' => '01012345678',
            'address' => 'الإسماعيلية',
            'email' => 'volunteer@example.com',
            'qualification' => 'بكالوريوس',
            'birthday' => '2000-01-01',
            'password' => bcrypt('password123'),
        ], $overrides));
    }

    public function test_login_succeeds_with_national_identity(): void
    {
        $this->makeUser();

        $response = $this->post('/account/login', [
            'national_identity' => '12345678901234',
            'password' => 'password123',
        ]);

        $response->assertRedirect('/');
        $this->assertAuthenticated();
    }

    public function test_login_succeeds_with_email(): void
    {
        $this->makeUser();

        $response = $this->post('/account/login', [
            'national_identity' => 'volunteer@example.com',
            'password' => 'password123',
        ]);

        $response->assertRedirect('/');
        $this->assertAuthenticated();
    }

    public function test_login_fails_with_wrong_password(): void
    {
        $this->makeUser();

        $response = $this->post('/account/login', [
            'national_identity' => '12345678901234',
            'password' => 'wrong-password',
        ]);

        $response->assertSessionHasErrors('national_identity');
        $this->assertGuest();
    }

    public function test_logout_terminates_session(): void
    {
        $user = $this->makeUser();
        $this->actingAs($user);

        $this->post('/account/logout');

        $this->assertGuest();
    }
}