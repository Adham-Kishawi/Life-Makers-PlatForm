<?php

namespace App\Filament\Resources;

use App\Filament\Concerns\HasNavigationBadge;
use Filament\Forms;
use App\Models\User;
use Filament\Tables;
use Filament\Forms\Form;
use Filament\Tables\Table;
use Filament\Resources\Resource;
use Illuminate\Support\Facades\Hash;
use Filament\Tables\Actions\EditAction;
use Filament\Tables\Actions\ViewAction;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Forms\Components\TextInput;
use Filament\Tables\Actions\ActionGroup;
use Filament\Tables\Actions\DeleteAction;
use Illuminate\Database\Eloquent\Builder;
use App\Filament\Resources\UserResource\Pages;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Section;
use Filament\Tables\Actions\Action;
use STS\FilamentImpersonate\Tables\Actions\Impersonate;
use Filament\Forms\Components\Wizard;
use Filament\Forms\Components\Wizard\Step;

class UserResource extends Resource
{
    use HasNavigationBadge;

    protected static ?string $model = User::class;

    protected static ?int $navigationSort = 1;

    protected static ?string $navigationIcon = 'heroicon-o-lock-closed';

    public static function getNavigationLabel(): string
    {
        return trans('filament-users::user.resource.label');
    }

    public static function getPluralLabel(): string
    {
        return trans('filament-users::user.resource.label');
    }

    public static function getLabel(): string
    {
        return trans('filament-users::user.resource.single');
    }

    // public static function getNavigationGroup(): ?string
    // {
    //     return config('filament-users.group');
    // }

    public function getTitle(): string
    {
        return trans('filament-users::user.resource.title.resource');
    }

    public static function form(Form $form): Form
    {
        return $form->schema([
            FileUpload::make('personal_photo')->alignCenter()->columnSpanFull()->avatar()->imageEditor()->previewable(),

            TextInput::make('name')
                ->required(),


            Forms\Components\Select::make('roles')
                ->multiple()
                ->preload()
                ->relationship('roles', 'name')
                ->label(trans('filament-users::user.resource.roles')),


            Section::make('Personal Info')->schema([
                TextInput::make('phone_number')
                    ->required()->startsWith('+'),

                TextInput::make('email')
                    ->email()
                    ->required()
                    ->endsWith("@gmail.com")
                    ->label(trans('filament-users::user.resource.email')),

                DatePicker::make('birthday')->required(),

                TextInput::make('job'),
            ])->columnSpan(1),

            Section::make('More Personal Info')->schema([

                TextInput::make('address')
                    ->required(),

                TextInput::make('detailed_address'),

                TextInput::make('national_identity')
                    ->required(),


                TextInput::make('qualification')->required(),
            ])->columnSpan(1),

            Forms\Components\Select::make('committee_id')
                ->preload()
                ->searchable()
                ->createOptionForm([
                    Forms\Components\TextInput::make('name')
                        ->required(),
                ])
                ->relationship('committees', 'name'),

            Forms\Components\Select::make('center_id')
                ->preload()
                ->searchable()
                ->createOptionForm([
                    Forms\Components\TextInput::make('name')
                        ->required(),
                ])
                ->relationship('centers', 'name'),

            TextInput::make('password')
                ->password()
                ->confirmed()
                ->rule(\Illuminate\Validation\Rules\Password::default()->min(8)->symbols()->mixedCase()->uncompromised())
                ->revealable()
                ->required(fn($record) => !$record)
                ->dehydrated(fn($state) => filled($state)),

            TextInput::make('password_confirmation')
                ->password()
                ->same('password')
                ->rule(\Illuminate\Validation\Rules\Password::default()->min(8)->symbols()->mixedCase()->uncompromised())
                ->revealable()
                ->required(fn($record) => !$record)
                ->dehydrated(false),
        ]);
    }

    public static function table(Table $table): Table
    {
        return config('filament-users.resource.table.class')::make($table);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListUsers::route('/'),
            'create' => Pages\CreateUser::route('/create'),
            'edit' => Pages\EditUser::route('/{record}/edit'),
        ];
    }
}
