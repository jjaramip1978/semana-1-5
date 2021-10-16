import httpClient from "./httpClient";

//esta es la ruta a la cual se harán las peticiones:
const ENDPOINT = "/api/buscatodoser";

//se hace petisión get al servidor backend utilizando la ruta deifinida anteriormente:
const getAllServicios = () => httpClient.get(ENDPOINT);

//esta es la ruta a la cual se harán las peticiones post:
const ENDPOINT2 = "/api/nuevo-servicio";

//se hace petisión get al servidor backend utilizando la ruta deifinida anteriormente:
const insertServicio = (servicio) => httpClient.post(ENDPOINT2, servicio);

export {
    getAllServicios,
    insertServicio,
}