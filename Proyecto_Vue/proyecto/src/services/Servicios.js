import httpClient from "./httpClient";

//esta es la ruta a la cual se harán las peticiones:
const ENDPOINT = "/api//routes/consultaser";

//se hace petisión get al servidor backend utilizando la ruta deifinida anteriormente:
const getAllServicios = () => httpClient.get(END_POINT);

export {
    getAllServicios,
}