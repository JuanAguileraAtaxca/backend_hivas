
import categoria from "./Categoria/Categoria.model.js";
import leyenda from "./Leyenda/Leyenda.model.js";
import municipio from "./Municipio/Municipio.model.js";

leyenda.belongsTo(categoria, {foreignKey: "idcategoria"});
leyenda.belongsTo(municipio, {foreignKey: "idmunicipio"});

export {
    leyenda, 
    categoria, 
    municipio
}



