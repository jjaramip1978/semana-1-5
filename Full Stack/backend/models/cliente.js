import mongoose from "mongoose";
const Schema = mongoose.Schema;

const clienteSchema = new Schema({

    documento:{type:String, required:[true, 'Documento obligatorio']},
    nombreCompleto:{type:String, required:[true, 'Nombre Requerido']},
    correo:{type:String, required:[true, 'Correo Obligatorio']},
    telefono:String,
    ciudadOferta:String
})

// Convertir a modelo

const Cliente = mongoose.model('Cliente',clienteSchema);

export default Cliente;