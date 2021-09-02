const { option } = require('yargs');

const argv = require('yargs')
.option('b', {
    alias: 'base',
    type: 'number',
    describe: 'Coloca la base para la tabla de multiplicar',
    demandOption: true
})
.check((argv, options) => {
    if(isNaN(argv.b)){
        throw 'La base debe ser un numero'
    }
    return true
})
.option('l', {
    alias: 'Listar',
    type: 'boolean',
    describe: 'Si se coloca muestra los elementos',
    default: false
})
.option('h', {
    alias: 'hasta',
    type: 'number',
    default: 10,
    describe: 'Limite de iteraciones'
})
.check((argv, options) => {
    if(isNaN(argv.h)){
        throw 'hasta debe ser un numero'
    }
    return true
})
.argv


module.exports = argv;