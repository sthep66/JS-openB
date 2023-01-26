

// Función que devuelve un error con un mensaje

function msg(){
    throw new Error("Mensaje de error personalizado");
}


// Registramos el error en un archivo a traves de try...catch 

const winston = require('winston');
const { createLogger, format, transports } = winston;

const logger = createLogger({
    format: format.combine(
        format.timestamp(),
        format.json()
    ),
    transports: [
        new transports.File({ filename: 'error.log', level: 'error' }),
    ],
});

try {
    msg();
} catch(e) {
    logger.error(e.message);
}
