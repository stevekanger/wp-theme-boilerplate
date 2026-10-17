<?php

declare(strict_types=1);

namespace WpThemeBoilerplate;

use WpThemeBoilerplate\Core\AbstractController;
use WpThemeBoilerplate\Core\Container;

defined('ABSPATH') || exit;

/**
 * Main application class.
 *
 * @since 0.1.0
 */
final class App {
    /**
     * Setup the App attributes.
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
     * Initializes any application specific functionality.
     *
     * @since 0.1.0
     */
    public function init(): static {

        return $this;
    }

    /**
     * Gets the service container.
     *
     * @since 0.1.0
     */
    public function get_container(): Container {
        return $this->container;
    }
}
