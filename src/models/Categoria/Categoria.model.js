
// se importa la configuracion de la conexion a la db
import db from '../../db/connect.js';

// Importa los tipos de datos que provee sequelize para definir los campos del modelo
import { DataTypes } from 'sequelize';

// se define un modelo "categoria" que representa la tabla 
// de la base de datos 
const categoria = db.define("categoria", {
    idCategoria: {
        field: 'idcategoria', // nombre de la columna
        type: DataTypes.INTEGER, // tipo de dato entero
        primaryKey: true,  // es primary key
        autoIncrement: true, // se auto incrememta
        allowNull: false // no se permiten valores nulos
    }, 
    nombre: {
        type: DataTypes.STRING(80), // tipo de dato String con una longitud de 80
        allowNull: false // no se permiten valores nulos
    }, 
    descripcion: {
        type: DataTypes.TEXT, // tipo de dato text
        allowNull: false // no se permiten valores nulos
    }
}, {
    freezeTableName: true, // evita que el modelo se nombre en plural
    tableName: "categoria" // se especifica el nombre de la tabla
});

// se exporta el modelo
export default categoria;
