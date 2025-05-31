
// se importa sequelize (ORM)
import { Sequelize } from "sequelize";

// se cargan las variables de entorno
import { 
    POSTGRES_DB, 
    POSTGRES_USER, 
    POSTGRES_PORT, 
    POSTGRES_PASSWORD, 
    POSTGRES_SERVER
} from "../loadEnv.js";

/* se crea un objeto para la conexion
// en primer lugar se indica el nombre de la db, el usuario y la password,
// dentro de coloca un objeto de configuracion que contiene
// parametros como el tipo de gestor, el servidor, puerto, numero de conexiones,
// y opciones adiciones cuando se usa https
*/
const db = new Sequelize(POSTGRES_DB, POSTGRES_USER, POSTGRES_PASSWORD, {
    host: POSTGRES_SERVER, // servidor
    dialect: 'postgres', // gestor 
    dialectOptions: {
        ssl: {
        require: true,    // Obliga a usar SSL
        rejectUnauthorized: false  // Ignora errores de certificado autofirmado 
        }
    },
    port: POSTGRES_PORT, // puerto
    define: {
        timestamps: false // se quita el timestamps que se coloca cuando se crean los modelos
    },
    pool: {
        min: 0, // minimo de conexiones
        max: 40, 
        acquire: 30000,
        idle: 10000
    }, 
});

// se exporta la conexion a la db
export default db;
