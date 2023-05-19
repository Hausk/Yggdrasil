<!DOCTYPE html>
<html lang="en">
<head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>App</title>
        @vite(['resources/css/public.css', 'resources/js/app.js'])
</head>
<body>
        <div id="app">
                <public-nav-bar></public-nav-bar>
                @yield('content')
        </div>
</body>
</html>