import axios from 'axios'

const getVueloAxios = async(origen, destino, fecha) => {
    return axios.get(`http://localhost:8085/APIAmerican/V1/vuelos?or=${origen}&des=${destino}&date=${fecha}`).then( r => r.data)
}

const getVuelo = async(origen, destino, fecha) => {
    return await getVueloAxios(origen, destino, fecha)
}

export default getVuelo