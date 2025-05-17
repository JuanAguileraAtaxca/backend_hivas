
import db from '../../db/connect.js';
import { DataTypes } from 'sequelize';

const categoria = db.define("categoria", {
    idCategoria: {
        field: 'idcategoria',
        type: DataTypes.INTEGER,
        primaryKey: true, 
        autoIncrement: true,
        allowNull: false    
    }, 
    nombre: {
        type: DataTypes.STRING(80), 
        allowNull: false     
    }, 
    descripcion: {
        type: DataTypes.TEXT, 
        allowNull: false
    }
}, {
    freezeTableName: true,
    tableName: "categoria"
});

export default categoria;
