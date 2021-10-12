//Rutas para conectarme al backend 
import httpClient from "./httpClient";

//esta es la ruta a la cual se harán las peticiones:
const ENDPOINT = "/api/routes/consultaprof";

//se hace petisión get al servidor backend utilizando la ruta deifinida anteriormente:
const getAllProfesionales = () => httpClient.get(END_POINT);

export {
    getAllProfesionales,
}