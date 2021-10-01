import express from 'express';
const router = express.Router();

import Nota from '../models/nota';

//AGREGAR UNA NOTA POR MEDIO DE POST.

router.post('/nueva-nota', async(req, res) =>{

    const body = req.body;
    try{
        const notaDB = await Nota.create(body);
        res.status(200).json(notaDB);

    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }

});

// RECUPERAR INFORMACION DE LA BASE DE DATOS POR MEDIO DE GET

//recuperar solo un documento
router.get('/nota/:id', async(req,res)=>{
    const _id = req.params.id;
    try{
        const notaDB = await Nota.findOne({_id});
        res.json(notaDB);
    }catch (error){
        return res.status(400).json({
            mensaje: 'No se encontró el ID',
            error
        })
    }
});

// recuperar todos los documentos

router.get('/nota',async(req,res)=>{
    try{
        const notaDB = await Nota.find();
        res.json(notaDB);

    } catch (error) {
        return res.status(500).json({
            mensaje: 'No hay datos',
            error
        })
    }

});

// Borrar un documento

router.delete('/nota/:id',async(req, res)=>{

    const _id = req.params.id;
    try {

        const notaDB = await Nota.findByIdAndDelete({_id});
        if(!notaDB){
            return res.status(400).json({
                mensaje: 'No se encontro el id indicado',
                error
            })
        }
        return res.json(notaDB);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'No se pudo eliminar',
            error
        })        
    }
})

// Para realizar la actualizacion de un documento

router.put('/nota/:id', async(req, res)=>{
    const _id = req.params.id;
    const body = req.body;
    try {
        const notaDB = await Nota.findByIdAndUpdate(
            _id, body, {new: true});
            res.json(notaDB);
      
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ohh, Ocurrio un error !!!',
            error
        })      
    }
});
// Exportamos la configuración de express app
module.exports = router;