const sharp = require('sharp')

sharp('./../../nodejs-modules.png')
    .resize(80)
    .toFile('nuevoTamano.png')