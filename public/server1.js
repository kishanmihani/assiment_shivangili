
/*const http = require("http");
const requestOptions = {
    hostname: 'fakestoreapi.com', path: '/product', method: 'GET'
}
const req = http.request(requestOptions, res => {
    console.log(`Status Code:${res.statusCode}`);
    res.on('data', product => {
        process.stdout.write(product);
    })
    res.on(`error`, error => {
        console.error(error);
    })
})
req.end();*/
var mongoclient = require("mongodb").mongoclient;
var connectionString = "mongodb://127.0.0.1:27017";
mongoclient.connect(connectionString, function (err, clientObject) {
    if (!err) {
        var dbo = clientObject.db("ishopdb");
        dbo.collection("").find().toArray(function (err, clientObject) {
            if (!err) {
                console.log(documents);
            } else {
                console.log(err);
            }
        })
    }
})
