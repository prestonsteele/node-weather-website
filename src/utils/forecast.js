const request = require('request')
const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=52258129e29a570aefc7a02c1f0f8dcb&query=' + latitude + ',' + longitude + '&units=f'
    //console.log(url);
    request({ url, json: true}, (error, {body}) => {
    //const data = JSON.parse(response.body)
    //temperature = (response.body.current.temperature * 1.8) + 32
    if (error){
        callback("Unable to connect to the weather service. Check internet connection.", undefined)
    } else if (body.error) {
        callback('Unable to find location. Try again', undefined)
    }
    else {
    callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degrees out. There is a " + body.current.precip + "% chance of rain. It feels like " + body.current.feelslike + " degrees out.")
    }
})
//console.log(response.body)
}
module.exports = forecast