import mongoose from "mongoose";
const Schema = mongoose.Schema;

const servicioSchema = new Schema({

    codigoServicio:{type:String, required:[true, 'Codigo obligatorio']},
    correoProfesional:{type:String, required:[true, 'Correo Requerido']},
    descripcion:{type:String, required:[true, 'Obligatorio']},
    valor:String
})

// Convertir a modelo

const Servicio = mongoose.model('Servicio',servicioSchema);

export default Servicio;