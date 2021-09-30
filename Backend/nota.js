import mongoose  from "mongoose";
const Schema = mongoose.Schema; // Establecer el esquema

//creacion del esquema
const notaSchema = new Schema({
    nombre: {type:String,required:[true,'Nombre obligatorio']},
    descripcion: String,
    usuarioId: String,
    date: {type: Date,default: Date.now},
    activo:{type:Boolean, default: true}
});

// Conversion del esquema a modelo

const Nota = mongoose.model('Nota',notaSchema);
export default Nota;