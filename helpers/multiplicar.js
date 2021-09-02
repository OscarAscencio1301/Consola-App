
const fs = require('fs');
const colors = require('colors');

const crearArchivoMultiplicar = async (base = 2, listar = false, hasta=10) => {

    try {

        let salida = '';
        let consola = '';

        for (let i = 1; i <= hasta; i++) {
            const numero = base * i
            salida += `${base} x ${i} = ${numero} \n`;
            consola += `${base} x ${i} = ${numero} \n`.bgCyan;
        }
        if (!listar) {
            console.clear();
            console.log('=========================='.green)
            console.log(`     Tabla del ${base}`.blue)
            console.log('=========================='.green)
            console.log(consola)
        }

        fs.writeFileSync(`./tablas/tabla-${base}.txt`, salida);

        return `Tabla del ${base}`;
    } catch (error) {
        console.log(error)

    }


}

module.exports = {
    crearArchivoMultiplicar
}