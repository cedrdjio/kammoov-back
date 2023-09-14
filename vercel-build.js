/* eslint-disable prettier/prettier */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { execSync } = require('child_process');

execSync('npm install -g prisma');  // Installe Prisma globalement
execSync('prisma generate');  // Génère les fichiers clients Prisma

// Votre script de démarrage habituel
require('./dist/main');
