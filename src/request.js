const request = require('request');
const config = require('./components/config');
module.exports.makeRequest = (callback) => {
    console.log('Testing request module that works');
    request('https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCzfu8Y5CsN7OCLJhZy_fH6w&key=' + config.api_key, (err, res, body) => {
        if(err) throw err;
        body = JSON.parse(body);
        let subscriberCount = body.items[0].statistics.subscriberCount;
        callback(subscriberCount);
    });
}