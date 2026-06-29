import fs from 'fs';
import composerJson from '../../composer.json';
import packageJson from '../../package.json';
import getRootDir from '../utils/getRootDir';

/**
 * Gets the version from the php entry file.
 *
 * @param {string} filePath The path to the entry file
 * @return array
 *
 * @since 0.1.0
 */
async function getVersionFromEntryFile(filePath: string) {
  const content = await fs.promises.readFile(filePath, 'utf8');

  /**
   * Matches the plugin version from the PHP docblock header.
   *
   * Example matched line:
   *   * Version: 0.1.0
   *
   * Breakdown:
   *   \* Version:  = literal docblock "Version:" line
   *   \s*          = optional whitespace after the colon
   *   ([0-9.]+)    = captures the version number (digits and dots)
   *
   * match[1] will contain the version string.
   */
  const headerMatch = content.match(/Version:\s*([0-9.]+)/);

  if (!headerMatch || !headerMatch[1]) {
    throw new Error('Could not find the version in entry header.');
  }

  return headerMatch[1];
}

/**
 * Logs the package versions in command line
 *
 * @param {string} packageVersion
 * @param {string} composerVersion
 * @param {string} headerVersion
 * @returns void
 *
 * @since 0.1.0
 */
function showVersions(
  packageVersion: string,
  composerVersion: string,
  headerVersion: string,
) {
  console.log(`
=========================================
Plugin Versions 
-----------------------------------------
package.json = ${packageVersion} 
composer.json = ${composerVersion} 
style.css header = ${headerVersion}
=========================================
  `);
}

/**
 * Gets the version
 *
 * Checks all files that should contain a version.
 * Checks whether all versions are the same and return the version.
 *
 * @returns string
 *
 * @since 0.1.0
 */
export default async function getVersion() {
  const packageVersion = packageJson.version;
  const composerVersion = composerJson.version;
  const entryFilePath = getRootDir('style.css');
  const headerVersion = await getVersionFromEntryFile(entryFilePath);

  const versions = [packageVersion, composerVersion, headerVersion];

  const allMatch = versions.every((v) => v === packageVersion);

  if (!allMatch) {
    showVersions(packageVersion, composerVersion, headerVersion);
    throw new Error('You have mismatch versions in your files.');
  }

  return packageVersion;
}
