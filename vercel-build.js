/* eslint-disable prettier/prettier */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { spawnSync } = require('child_process');

// Exécutez la génération Prisma avant de démarrer l'application
spawnSync('npx', ['prisma', 'generate'], { stdio: 'inherit' });

// Ensuite, démarrez votre application Nest.js
require('./dist/main');
