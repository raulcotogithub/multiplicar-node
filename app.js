const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const { argv } = require('./config/yargs')
const colors = require('colors/safe');
let comando = argv._[0];

switch (comando) {

    case 'listar':
        //console.log('listar');
        listarTabla(argv.base, argv.limite)
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${colors.rainbow(archivo)}`))
            .catch(err => console.log(err));
        break;

    default:
        console.log('Comando no reconocido');
        break;

}

//console.log(argv);


// console.log(argv2);

// let parametro = argv[2];
// let base = parametro.split('=')[1];
// console.log(base);