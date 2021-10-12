import axios from 'axios';

const httpClient = axios.create({
    timeout: 3000, //la conexión no se puede demorar mas de 3seg
    headers:{
        "content-Type": "aplicación/json" //todas las peticiones serán tipo json
    }
})

export default httpClient;