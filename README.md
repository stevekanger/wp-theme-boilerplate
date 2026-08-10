# Wordpress block theme boilerplate

Simple starter theme to get started writing wordpress block themes

## Folder structure

All php files reside in `inc`. All `psr-4` classes will be autoloaded via `composer` from the `app` folder.

All raw js, css, and blocks reside in `src`. These are files that need to be built during the build process.

## Installation

```bash
git clone https://github.com/stevekanger/wp-plugin-boilerplate

```

first run

```bash
npm install

```

Then you can run the init script to bootstrap your plugin. This will prompt you for your information.

```bash
npx ts-node ./dev-tools/init

```

After running the init script you can then run.

```bash
composer install

composer dump-autoload

```

And now your plugin is set up. You still need to go your entry php file and finish filling out the header with the rest of your information.

## Usage

### Docker

This plugin has docker set up to control the development environment. You don't have to use docker but its definitely recommended to ensure your plugin works with your target Wordpress/Php versions. You must have `docker` and `docker-compose` installed.

The `debug.log` file from the container is also set to appear in the plugins root directory for easy debugging. Docker env variables for php and wordpress versions will be set when running the init script.

### Dev Scripts

Build run.

```bash
npm run build

```

Development run.

```bash
npm run dev

```

To archive your plugin for distribution run.

```bash
npm run archive:plugin

```

To archive your entire development version of the plugin. This can be handy if your developing for a client and need to ship the entire plugin contents.

```bash
npm run archive:dev

```

## Updating php and wordpress versions

The choice is up to you how you want to keep your plugin current. In `.env` you can specify your php and wordpress versions.

For every wordpress release in the future you will need to update the `composer.json` wordpress testing suite manually. So if you change versions in your `.env` file for docker you would want to update `composer.json` to match your wordpress version. Then run `composer update`.
