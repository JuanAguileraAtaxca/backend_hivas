
import { municipio, leyenda, categoria } from "../models/models.js";

export const obtenerMunicipios = async (req, res) => {
    try {
        
        const municipios = await municipio.findAll();

        if(municipios.length === 0){
            return res.status(200).json({
                ok: false,
                message: 'No hay municipios disponibles'
            });
        }

        console.log(municipios);

        return res.status(200).json(municipios);

    } catch (error) {
        console.error(error);
        return res.status(404).json({
            ok: false,
            message: "No fue posible obtener los municipios"
        });
    }
}

export const obtenerLeyendasPorMunicipio = async (req, res) => {

    try {
        
        const {id} = req.params;

        const leyendas = await leyenda.findAll({
            where: {
                idmunicipio: id
            }, 
            include: [
                {
                    model: categoria, 
                    attributes: ["nombre"]
                },
                {
                    model: municipio, 
                    attributes: ['nombre'], 
                    
                }, 
            ]
        });


        if(leyendas.length === 0){
            return res.status(200).json({
                ok: false,
                message: 'No hay municipios disponibles'
            });
        }

        return res.status(200).json(leyendas);

    } catch (error) {
        console.error(error);
        return res.status(404).json({
            ok: false,
            message: 'Error al obtener las leyendas'
        });
    }
}

