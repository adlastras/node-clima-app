const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        descripcion: 'Dirección del lugar para obtener el clima',
        demand: true
    }
}).argv;

// const zona = require('./zona/zona');
// const clima = require('./clima/clima');

//const info = require('./info/info');

const zona = require('./zona/zona');
const clima = require('./clima/clima');

//console.log(argv.direccion);

// const encodeURL = encodeURI(argv.direccion);
// //console.log(encodeURL);

// const instance = axios.create({
//     baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURL}`,
//     headers: { 'X-RapidAPI-Key': '2c2704e2fdmsh5a49ae949a7375ep1772cajsncc47415fce03' }
// });

// instance.get().then(resp => {
//     console.log(resp.data.Results[0]);
// }).catch(err => {
//     console.log('Error: ', err);
// });

//zona.getCoordenadasLatLon(argv.direccion).then(console.log);
//clima.getClima(40.750000, -74.000000).then(console.log).catch(console.log);

const getInfo = async(direccion) => {

    try {
        const coordenadas = await zona.getCoordenadasLatLon(direccion);

        const temp = await clima.getClima(coordenadas.latitud, coordenadas.longitud);

        return `El clima de ${direccion} es de ${temp}`;

    } catch (err) {

        return `No se pudo determinar el clima de ${direccion}`;
    }

}

getInfo(argv.direccion).then(console.log).catch(console.log);