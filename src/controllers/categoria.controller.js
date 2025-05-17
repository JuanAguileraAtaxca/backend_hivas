
import { categoria, leyenda, municipio } from "../models/models.js"

export const obtenerCategorias = async (req, res) => {

    try {
        
        const categorias = await categoria.findAll();

        if(categorias.length === 0){

            return res.status(202).json({
                ok: false, 
                message: "No hay categorias disponibles"
            });
        }

        return res.status(200).json(categorias);

    } catch (error) {
        console.log(error);
        return res.status(404).json({
            ok: false, 
            message: "No es posible obtener las categorias"
        });
    }
}

export const obtenerLeyendasPorCategoria = async (req, res) => {
    try {
        
        const {id} = req.params;

        const leyendas = await leyenda.findAll({
            where: {
                idcategoria: id
            }, 
            include: [
                {
                    model: municipio, 
                    attributes: ['nombre']
                },
                {
                    model: categoria, 
                    attributes: ['nombre'], 
                }
            ]
        });

        if(leyendas.length === 0){
            return res.status(200).json({
                ok: false, 
                message: "La categoria no existe"
            });
        }

        return res.status(200).json(leyendas);


    } catch (error) {
        console.error(error);
        return res.status(404).json({
            ok: false, 
            message: "No fue posible obtener leyendas por categoria"
        });
    }
}


