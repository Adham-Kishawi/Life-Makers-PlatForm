<!DOCTYPE html>
<html lang="ar" dir="rtl">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
    <link rel='stylesheet' href='https://unicons.iconscout.com/release/v2.1.9/css/unicons.css'>
    <link rel='stylesheet' href='/css/parts/tokens.css?v={{ time() }}'>
    <link rel='stylesheet' href='/css/parts/fonts.css?v={{ time() }}'>
    <link rel='stylesheet' href='/css/parts/base.css?v={{ time() }}'>
    <link rel='stylesheet' href='/css/parts/grid.css?v={{ time() }}'>
    <link rel='stylesheet' href='/css/parts/navbar.css?v={{ time() }}'>
    <link rel='stylesheet' href='/css/parts/footer.css?v={{ time() }}'>
    <link rel='stylesheet' href='/css/parts/pages.css?v={{ time() }}'>
    <link rel='stylesheet' href='/css/parts/components.css?v={{ time() }}'>
    <link rel='stylesheet' href='/css/parts/forms.css?v={{ time() }}'>
    <link rel='stylesheet' href='/css/parts/utilities.css?v={{ time() }}'>
    <link rel='stylesheet' href='/css/parts/dark-mode.css?v={{ time() }}'>
    <script>
        (function() {
            try {
                const theme = localStorage.getItem('life_makers_theme') || localStorage.getItem('theme');
                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark-mode');
                    if (document.body) {
                        document.body.classList.add('dark-mode');
                    } else {
                        document.addEventListener('DOMContentLoaded', function() {
                            if (document.body) document.body.classList.add('dark-mode');
                        });
                    }
                }
            } catch (e) {}
        })();
    </script>
    @viteReactRefresh
    @vite(['resources/js/index.jsx', 'resources/css/app.css'])
    <link rel="icon" type="image/png" href="/Images/logo.png?v={{ time() }}">
    <link rel="shortcut icon" type="image/png" href="/Images/logo.png?v={{ time() }}">
    <link rel="apple-touch-icon" href="/Images/logo.png?v={{ time() }}">
    <title>صناع الحياة - مصر | فرع الإسماعيلية</title>
    @inertiaHead
</head>

<body>
    @inertia
    <script src="/js/main.js"></script>
</body>

</html>
