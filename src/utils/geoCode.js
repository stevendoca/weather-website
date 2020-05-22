const request = require('request')
const geoCode = (address, callback) => {
    const urlMapBox = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+address+".json?access_token=pk.eyJ1IjoiZG9odXljdW9uZzkyIiwiYSI6ImNrN3BweTJtdzAyc2czbW12bTlndGc5MjQifQ.YprcLRCN5kGB8380zfw4lw&limit=1"
    
    request({url: urlMapBox, json: true}, (e,r) => {
        if (e) {
            callback('unable to connect web stack',undefined)
        }else if (r.body.features.length === 0){
            callback(undefined, "unable to find location")
        }else {
            const data = {
                la: r.body.features[0].center[1],
                lo: r.body.features[0].center[0],
                des: r.body.features[0].place_name
            }
            callback(undefined, data)
        }
    })
}

module.exports = geoCode