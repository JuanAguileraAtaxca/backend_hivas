
// se importan los modelos
import categoria from "./Categoria/Categoria.model.js";
import leyenda from "./Leyenda/Leyenda.model.js";
import municipio from "./Municipio/Municipio.model.js";

// se declaran sus asociones para la llaves foraneas
leyenda.belongsTo(categoria, {foreignKey: "idcategoria"});
leyenda.belongsTo(municipio, {foreignKey: "idmunicipio"});

// modificado se exportan
export {
    leyenda, 
    categoria, 
    municipio
}



