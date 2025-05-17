
import db from "../../db/connect.js";
import { DataTypes } from "sequelize";

const leyenda = db.define("leyenda", {
    idleyenda: {
        field: 'idleyenda',
        type: DataTypes.INTEGER, 
        allowNull: false,
        autoIncrement: true, 
        primaryKey: true
    }, 
    titulo: {
        type: DataTypes.STRING(80), 
        allowNull: false
    }, 
    contenido: {
        type: DataTypes.TEXT, 
        allowNull: false
    }, 
    urlra: {
        type: DataTypes.TEXT, 
        allowNull: false
    }, 
    urlimage: {
        type: DataTypes.TEXT, 
        allowNull: false
    }, 
    urlaudio: {
        type: DataTypes.TEXT, 
        allowNull: false
    },
    idcategoria: {
        field: 'idcategoria',
        type: DataTypes.INTEGER, 
        allowNull: false
    }, 
    idmunicipio: {
        field: 'idmunicipio',
        type: DataTypes.INTEGER, 
        allowNull: false
    }
}, {
    freezeTableName: true,
    tableName: 'leyenda'
});

export default leyenda;

