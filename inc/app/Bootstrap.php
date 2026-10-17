<?php

declare(strict_types=1);

namespace WpThemeBoilerplate;

use WpThemeBoilerplate\Controllers\AssetController;
use WpThemeBoilerplate\Core\Container;
use WpThemeBoilerplate\Services\ExampleService;

defined('ABSPATH') || exit;

final class Bootstrap {
    /**
     * Set up bootstrap dependencies.
     *
     * @param Container $container The service container
     *
     * @since 0.1.0
     */
    public function __construct(
        private Container $container,
    ) {
    }

    /**
     * Populates the container with dependencies.
     *
     * @since 0.1.0
     */
    public function populate_container(): void {
        // Example binding - replace with your own services.
        $this->container->bind(ExampleService::class, ExampleService::create(...));
    }

    /**
     * Registers the controllers.
     *
     * @since 0.1.0
     */
    public function register_controllers(): void {
        AssetController::create($this->container)->register();
    }
}
