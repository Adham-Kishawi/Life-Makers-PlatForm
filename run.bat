@echo off
echo Starting Life Makers Platform...
start cmd /k "title Laravel Server && php artisan serve --port=8000"
start cmd /k "title Vite Dev Server && npm run dev"
