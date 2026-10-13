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
 
    /**
     * Creates a controller from the factory provided and calls register.
     *
     * @param callable $factory A function that returns an instance of the controller
     *
     * @since 0.1.0
     */
    public function register_controller(callable $factory): static {
        $instance = $factory($this->container);

        if (!$instance instanceof AbstractController) {
            $instance_name = get_debug_type($instance);

            throw new \RuntimeException("Attempt to register invalid controller '{$instance_name}'.");
        }

        $instance->register();

        return $this;
    }
}
