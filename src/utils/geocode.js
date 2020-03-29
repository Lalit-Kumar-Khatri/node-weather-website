const request = require('request');

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibGFsc2EiLCJhIjoiY2s3bHZ4ZnFpMDdscDNmcGF1MXl2dGs2dSJ9.eTfuEtnSRT_2IcA4t3DiOg&limit=1'

    request({ url, json: true }, (error, { body }) => {
            if (error) {
                    callback('Unabble to connect to location services!', undefined)
            } else if (body.features.length === 0) {
                    callback('Unable to find location. Try another search', undefined)
            } else {
                    callback(undefined, {
                            latitude: body.features[0].center[1],
                            longitude: body.features[0].center[0],
                            location: body.features[0].place_name

                    })
            }
    })
}


module.exports = geocode