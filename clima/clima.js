const axios = require('axios');

const getClima = async(lat, lon) => {

    const respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=3caeac3d47debefbefef8dacef542b5e&units=metric`);

    return respuesta.data.main.temp;
}

module.exports = { getClima };