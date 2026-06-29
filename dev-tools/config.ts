const config = {
  /**
   * Distribution archive configs
   *
   * Any additional files added that need to be included in the distribution
   * should be added to the includedItems array.
   *
   * @since 0.1.0
   */
  archive: {
    // Included items when creating the theme archive
    includedItemsTheme: [
      'assets',
      'build',
      'inc',
      'parts',
      'patterns',
      'templates',
      'vendor',
      'license.txt',
      'functions.php',
      'readme.txt',
      'screenshot.png',
      'style.css',
      'theme.json',
    ],
    // Included items when passing "dev" to archive the full development build
    includedItemsDev: [
      'assets',
      'dev-tools',
      'inc',
      'parts',
      'patterns',
      'src',
      'templates',
      '.example.env',
      '.gitignore',
      '.php-cs-fixer.dist.php',
      '.prettierignore',
      '.prettierrc',
      'composer.json',
      'docker-compose.yml',
      'Dockerfile',
      'functions.php',
      'package.json',
      'README.md',
      'readme.txt',
      'screenshot.png',
      'style.css',
      'theme.json',
      'tsconfig.json',
      'webpack.config.js',
    ],
  },
};

export default config;
