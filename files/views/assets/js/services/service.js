/*
 * Services
 */

var getWeather = new Appery.RestService({
    'url': 'http://api.worldweatheronline.com/free/v1/weather.ashx',
    'dataType': 'jsonp',
    'type': 'get',
});