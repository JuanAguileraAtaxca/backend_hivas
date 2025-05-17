
import db from "../../db/connect.js";
import { DataTypes } from "sequelize";

const municipio = db.define('municipio', {
    idMunicipio: {
        field: 'idmunicipio',
        type: DataTypes.INTEGER, 
        primaryKey: true,
        allowNull: false, 
        autoIncrement: true
    }, 
    nombre: {
        type: DataTypes.STRING(80), 
        allowNull: false
    }, 
    urlimagen: {
        type: DataTypes.TEXT, 
    },
    urllogo: {
        type: DataTypes.TEXT,
    },
    descripcion: {
        type: DataTypes.TEXT, 
        allowNull: false
    }
}, {
    freezeTableName: true, 
    tableName: 'municipio'
});

export default municipio; 