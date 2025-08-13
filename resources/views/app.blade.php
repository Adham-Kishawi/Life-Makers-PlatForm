<!DOCTYPE html>
<html lang="ar" dir="rtl">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel='stylesheet' href='https://unicons.iconscout.com/release/v2.1.9/css/unicons.css'>
    <link rel='stylesheet' href='/css/bootstrap.min.css'>
    <link rel='stylesheet' href='/css/style.css'>
    @viteReactRefresh
    @vite(['resources/js/index.jsx'])
    <title>{{ config('app.name', 'صناع الحياة - الإسماعيلية') }}</title>
    @inertiaHead
</head>

<body>
    @inertia
    <div id="root"></div>
    <script src="/js/jquery.slim.min.js"></script>
    <script src="/js/popper.min.js"></script>
    <script src="/js/bootstrap.min.js"></script>
    <script src="/js/main.js"></script>
</body>

</html>
