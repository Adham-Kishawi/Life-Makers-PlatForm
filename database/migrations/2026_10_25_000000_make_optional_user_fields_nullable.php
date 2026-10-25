<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Registration marks phone_number/address/qualification/birthday as
     * optional, but the columns were created NOT NULL — any volunteer
     * omitting them hit a raw SQL error (500) instead of registering.
     */
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('phone_number')->nullable()->change();
            $table->longText('address')->nullable()->change();
            $table->string('qualification')->nullable()->change();
            $table->date('birthday')->nullable()->change();
        });
    }

    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('phone_number')->nullable(false)->change();
            $table->longText('address')->nullable(false)->change();
            $table->string('qualification')->nullable(false)->change();
            $table->date('birthday')->nullable(false)->change();
        });
    }
};
