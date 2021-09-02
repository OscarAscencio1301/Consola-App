const { crearArchivoMultiplicar } = require('./helpers/multiplicar')
const argv = require('./config/yargs')

const base = argv.b;
const listar = argv.l;
const hasta = argv.h
crearArchivoMultiplicar(base, listar, hasta).then(nombrearchivo => console.log(nombrearchivo, 'creado'))
.catch(error => console.log(error))
