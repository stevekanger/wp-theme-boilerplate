import { exec } from 'child_process';
import ensureDistDir from '../utils/ensureDistDir';
import getEnv from '../utils/getEnv';
import commandLinePrompt from '../utils/commandLinePrompt';

async function extractTheme() {
  const outputDir = ensureDistDir();

  const containerName = getEnv('SLUG');
  const themeName = await commandLinePrompt('Theme name: ');

  exec(
    `docker cp ${containerName}-wordpress:/var/www/html/wp-content/themes/${themeName} ${outputDir}/${themeName}`,
    (error, stdout, stderr) => {
      if (error) {
        console.error(`Execution Error: ${error.message}`);
        return;
      }

      if (stderr) {
        console.error(`Std Error: ${stderr}`);
        return;
      }

      console.log(stdout);
    },
  );
}

extractTheme();
