const request = require('request')
const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoicHJlc3RvbnNzdGVlbGUiLCJhIjoiY2w2cXMycTYzMHhkczNibzZzN2FwMXhlMyJ9.F3AXp2lehXBZ0U9uUQwlWQ&limit=1'

    request({ url, json: true}, (error, {body}) => {
            if (error){
                    callback('Unable to connect to Location Services', undefined)
                    } else if (body.features.length === 0) {
                        callback('Unable to find location. Try another search.', undefined)
                    }
                    else {
                        const latitude = body.features[0].center[1]
                        const longitude = body.features[0].center[0]
                        callback(undefined, {
                            latitude: latitude,
                            longitude: longitude,
                            location: body.features[0].place_name
                        })
                    }
                })
}

module.exports = geocode