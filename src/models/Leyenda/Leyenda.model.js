
// se importa la conexion de la db 
import db from "../../db/connect.js";
// se importan los tipos de datos de sequelize
import { DataTypes } from "sequelize";

// se define el modelo "leyenda" que representa la tabla de db
const leyenda = db.define("leyenda", {
    // columna de la tabla
    idleyenda: {
        field: 'idleyenda', // nombre de la columna
        type: DataTypes.INTEGER, // tipo de dato entero
        allowNull: false, // no se permiten nulos
        autoIncrement: true, // se autoincrementa
        primaryKey: true // es una llave primaria
    }, 
    titulo: {
        type: DataTypes.STRING(80), // tipo de dato del tipo string con 80 de longitud
        allowNull: false // no se permiten valores nulos
    }, 
    contenido: {
        type: DataTypes.TEXT, // valores del tipo text
        allowNull: false // no se permiten valores nulos, es obligatorio
    }, 
    urlra: {
        type: DataTypes.TEXT, // valores del tipo text
        allowNull: false // no se permiten valores nulos
    }, 
    urlimage: {
        type: DataTypes.TEXT, // valores del tipo text
        allowNull: false // no se permiten valores nulos
    }, 
    urlaudio: {
        type: DataTypes.TEXT, 
        allowNull: false
    },
    idcategoria: {
        field: 'idcategoria', // se especifica el nombre del campo
        type: DataTypes.INTEGER,  // campo del tipo entero
        allowNull: false // este campo no recibe valores nulos
    }, 
    idmunicipio: {
        field: 'idmunicipio', // nombre de la columna
        type: DataTypes.INTEGER,  // valor del tipo entero
        allowNull: false // no se permiten valores nulos
    }
}, {
    freezeTableName: true, // se evita que se coloque en plural la tabla
    tableName: 'leyenda' // se especifica el nombre de la tabla
});

// se exporta el modelo
export default leyenda;

