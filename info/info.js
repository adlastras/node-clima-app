const zona = require('../zona/zona');
const clima = require('../clima/clima');

const getInfo = async(direccion) => {

    const coordenadas = await zona.getCoordenadasLatLon(direccion);

    const temp = await clima.getClima(coordenadas.latitud, coordenadas.longitud);

    return temp;

}

module.exports = { getInfo };