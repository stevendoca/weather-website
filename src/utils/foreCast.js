const request = require('request')

const foreCast = (lg, lt, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=65a581d6ea9acba3c84d54bb74b49cd3&query='+lt+','+lg+'&units=f'

    request ({url: url, json: true}, (e, r, b) => {
        if (e) {
            callback('unable to connect web stack', undefined)
        } else if (b.error) {
            callback ('unable to find location', undefined)
        } else {
            data = {
                des: b.current.weather_descriptions[0],
                temp: b.current.temperature,
            }
            callback(undefined, data)
        }
    })
}
module.exports = foreCast