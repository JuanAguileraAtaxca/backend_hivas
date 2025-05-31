
// se importa la conexion a la base de datos
import db from "../../db/connect.js";

// se importan los tipos de datos
import { DataTypes } from "sequelize";

// se define el modelo "municipio" que hace referencia
// a la tabla mencionada
const municipio = db.define('municipio', {
    idMunicipio: {
        field: 'idmunicipio', // nombre de la columna
        type: DataTypes.INTEGER, // valor del tipo entero
        primaryKey: true, // se especifica que es una llave primaria
        allowNull: false, // no se permiten valores nulos
        autoIncrement: true // se indica que el valor se auto incrememta
    }, 
    nombre: {
        type: DataTypes.STRING(80), // se especifica que es de tipo string y de 80 caracteres de longitud
        allowNull: false // no se permiten valores vacios 
    }, 
    urlimagen: {
        type: DataTypes.TEXT, // tipo de dato TEXT
    },
    urllogo: {
        type: DataTypes.TEXT, // tipo de dato TEXT
    },
    descripcion: {
        type: DataTypes.TEXT, // tipo de dato TEXT
        allowNull: false // no se permiten valores nulos
    }
}, {
    freezeTableName: true, // evita que la tabla se nombre en plural
    tableName: 'municipio' // nombre de la tabla
});

export default municipio; 