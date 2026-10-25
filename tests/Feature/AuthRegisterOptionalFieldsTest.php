<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

/**
 * Regression test: phone_number / address / qualification / birthday are
 * optional in the registration form, but were NOT NULL at the DB level —
 * omitting them caused a raw SQL error (500). Migration
 * 2026_10_25_000000_make_optional_user_fields_nullable.php fixed this.
 */
class AuthRegisterOptionalFieldsTest extends TestCase
{
    use RefreshDatabase;

    private function minimalPayload(array $overrides = []): array
    {
        return array_merge([
            'name' => 'Minimal Volunteer',
            'national_identity' => '98765432101234',
            'email' => 'minimal@example.com',
            'password' => 'password123',
            'password_confirmation' => 'password123',
        ], $overrides);
    }

    public function test_user_can_register_without_any_optional_field(): void
    {
        $response = $this->post('/account/register', $this->minimalPayload());

        $response->assertRedirect('/');
        $this->assertAuthenticated();
        $this->assertDatabaseHas('users', [
            'email' => 'minimal@example.com',
            'phone_number' => null,
            'address' => null,
            'qualification' => null,
            'birthday' => null,
        ]);
    }

    public function test_user_can_register_with_some_optional_fields(): void
    {
        $response = $this->post('/account/register', $this->minimalPayload([
            'phone_number' => '01098765432',
            'birthday' => '1999-05-15',
        ]));

        $response->assertRedirect('/');
        $this->assertDatabaseHas('users', [
            'email' => 'minimal@example.com',
            'phone_number' => '01098765432',
            'address' => null,
            'qualification' => null,
            'birthday' => '1999-05-15',
        ]);
    }
}
