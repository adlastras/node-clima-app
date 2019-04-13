const axios = require('axios');

const getCoordenadasLatLon = async(dir) => {

    const encodeURL = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURL}`,
        headers: { 'X-RapidAPI-Key': '2c2704e2fdmsh5a49ae949a7375ep1772cajsncc47415fce03' }
    });

    const respuesta = await instance.get();

    if (respuesta.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = respuesta.data.Results[0];
    const direccion = data.name;
    const latitud = data.lat;
    const longitud = data.lon;

    return {
        direccion,
        longitud,
        latitud
    }
}

module.exports = { getCoordenadasLatLon }