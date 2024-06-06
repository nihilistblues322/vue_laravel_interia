<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    sleep(0.3);
    return Inertia::render('Home');
});

Route::get('/about', function () {
    sleep(0.3);
    return Inertia::render('About');
});
