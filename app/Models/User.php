<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use Filament\Models\Contracts\FilamentUser;
use Filament\Models\Contracts\HasAvatar;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Spatie\Permission\Traits\HasRoles;
use Filament\Panel;

use function PHPUnit\Framework\isEmpty;

class User extends Authenticatable implements HasAvatar, FilamentUser
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable, HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'national_identity',
        'phone_number',
        'address',
        'detailed_address',
        'email',
        'qualification',
        'birthday',
        'job',
        'personal_photo',
        'committee_id',
        'center_id',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function canImpersonate()
    {
        return true;
    }

    public function committees()
    {
        return $this->belongsTo(Committee::class);
    }

    public function centers()
    {
        return $this->belongsTo(Center::class);
    }
    
    public function getFilamentAvatarUrl(): ?string
    {
        return $this->personal_photo;
    }

    public function canAccessPanel(Panel $panel): bool
    {
        return count($this->roles);
    }
}
