import { dirname } from 'path';
import { fileURLToPath } from 'url';

// Cambiar 'import.meta.url' a algo que sea compatible con ES2020 y superior
const serverDistFolder = dirname(fileURLToPath(import.meta.url));

// Continuar con tu código en server.ts
