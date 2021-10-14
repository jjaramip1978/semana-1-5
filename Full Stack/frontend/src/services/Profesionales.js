//Rutas para conectarme al backend 
import httpClient from "./httpClient";

//esta es la ruta a la cual se harán las peticiones:
const ENDPOINT = "/api/busca";

//se hace petisión get al servidor backend utilizando la ruta deifinida anteriormente:
const getAllProfesionales = () => httpClient.get(ENDPOINT);

// se crea el ENDPOINT para el post
const ENDPOINT2 = "/api/nuevo-profesional";

// se crea el servicio de publicar 
const insertInge = (ingeniero) => httpClient.post(ENDPOINT2, ingeniero)

export {
    getAllProfesionales,
    insertInge
}