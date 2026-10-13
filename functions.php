<?php

declare(strict_types=1);

namespace WpThemeBoilerplate;

use WpThemeBoilerplate\Config\AppConfig;
use WpThemeBoilerplate\Controllers\AssetController;
use WpThemeBoilerplate\Core\Container;

defined('ABSPATH') || exit;

// Require autoloader
require_once __DIR__ . '/vendor/autoload.php';

// Initialize the app config information.
AppConfig::init(
    get_file_data(__DIR__ . '/style.css', ['Version' => 'Version'])['Version'] ?: '0.1.0',
    __DIR__,
    __FILE__,
    'Wp Theme Boilerplate',
    'wp_theme_boilerplate',
    'wp-theme-boilerplate',
);

// Create the service container
$container = new Container();

// If you have any services bind them to the container. Example:
// $container->bind(ExampleService::class, ExampleService::create(...));

// Create the app
$app = new App($container);

// Init the app
$app->init();

// Register controllers
$app->register_controller(AssetController::create(...));
