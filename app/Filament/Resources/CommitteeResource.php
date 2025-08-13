<?php

namespace App\Filament\Resources;

use App\Filament\Resources\CommitteeResource\Pages;
use App\Filament\Resources\CommitteeResource\RelationManagers;
use App\Models\Committee;
use Filament\Forms;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Wizard;
use Filament\Forms\Components\Wizard\Step;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Guava\FilamentIconPicker\Forms\IconPicker;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class CommitteeResource extends Resource
{
    protected static ?string $model = Committee::class;

    protected static ?int $navigationSort = 2;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function getNavigationBadge(): ?string
    {
        return static::getEloquentQuery()->count();
    }

    public static function getNavigationBadgeColor(): ?string
    {
        return static::getEloquentQuery()->count() ? 'primary' : 'gray';
    }

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Wizard::make([
                    Step::make('step 1 (info)')->schema([
                        Forms\Components\Textarea::make('icon')->rows(2)->placeholder('svg...'),
                        Forms\Components\TextInput::make('name')->required(),
                        Forms\Components\RichEditor::make('description'),
                    ])->columns(1),

                    Step::make('step 1 (data)')->schema([
                        Repeater::make('data')->schema([
                            TextInput::make('title')->required(),
                            FileUpload::make('image')->image()->imageEditor()->previewable(),
                            RichEditor::make('description')
                        ])
                    ])
                ])
            ])->columns(1);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->deferLoading()
            ->recordAction(null)
            ->recordUrl(null)
            ->reorderable('order')
            ->paginatedWhileReordering()
            ->columns([
                Tables\Columns\TextColumn::make('id')
                    ->rowIndex(),

                Tables\Columns\TextColumn::make('name')
                    ->searchable(),

                Tables\Columns\TextColumn::make('description')->html()->limit(30)
                    ->badge()->searchable(),

                Tables\Columns\TextColumn::make('description')->html()->limit(30)
                    ->badge()->searchable(),

                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),

                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\ViewAction::make(),
                Tables\Actions\ActionGroup::make([
                    Tables\Actions\EditAction::make(),
                    Tables\Actions\DeleteAction::make(),
                ])
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getEloquentQuery(): Builder
    {
        return static::getModel()::query()->orderBy('order', 'asc');
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListCommittees::route('/'),
            'create' => Pages\CreateCommittee::route('/create'),
            'edit' => Pages\EditCommittee::route('/{record}/edit'),
        ];
    }
}
