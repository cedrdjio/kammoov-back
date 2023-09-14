/* eslint-disable prettier/prettier */
import { spawnSync } from 'child_process';

// Exécutez la génération Prisma avant de démarrer l'application
spawnSync('npx', ['prisma', 'generate'], { stdio: 'inherit' });

// Ensuite, démarrez votre application Nest.js
require('./dist/main');
