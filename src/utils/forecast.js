const request = require("postman-request");
require("dotenv").config();

const forecast = (lat, long, callback) => {
  // Set a new API
  const url =
    `http://api.weatherstack.com/current?access_key=${process.env.API_KEY}&query=` +
    lat +
    "," +
    long;
  request({ url, json: true }, (error, { body } = {}) => {
    if (error) {
      callback("Please check your connection", undefined);
    } else if (body.error) {
      callback("Can't find location, Try another one", undefined);
    } else {
      const temp = body.current.temperature;
      const feelslike = body.current.feelslike;
      const weather_descriptions = body.current.weather_descriptions;
      callback(
        undefined,
        `${weather_descriptions}. The temperatuer is ${temp}°. Feels like ${feelslike}°  `
      );
    }
  });
};

module.exports = forecast;
