<!DOCTYPE html>
<html lang="ar" dir="rtl">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
    <link rel='stylesheet' href='https://unicons.iconscout.com/release/v2.1.9/css/unicons.css'>
    <link rel='stylesheet' href='/css/parts/tokens.css'>
    <link rel='stylesheet' href='/css/parts/fonts.css'>
    <link rel='stylesheet' href='/css/parts/base.css'>
    <link rel='stylesheet' href='/css/parts/grid.css'>
    <link rel='stylesheet' href='/css/parts/navbar.css'>
    <link rel='stylesheet' href='/css/parts/footer.css'>
    <link rel='stylesheet' href='/css/parts/pages.css'>
    <link rel='stylesheet' href='/css/parts/components.css'>
    <link rel='stylesheet' href='/css/parts/forms.css'>
    <link rel='stylesheet' href='/css/parts/utilities.css'>
    <link rel='stylesheet' href='/css/parts/dark-mode.css'>
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
    <link rel="icon" type="image/png" href="/images/logo.png">
    <link rel="shortcut icon" type="image/png" href="/images/logo.png">
    <link rel="apple-touch-icon" href="/images/logo.png">
    <title>صناع الحياة - مصر | فرع الإسماعيلية</title>
    @inertiaHead
</head>

<body>
    @inertia
    <script src="/js/main.js"></script>
</body>

</html>
