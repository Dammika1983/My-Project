// const users = require('./dataset.js');
const fs = require('fs');

exports.getPage = function (req, res) {
    res.writeHead(200, {'content-type': 'text/html'});
	fs.createReadStream('index.html').pipe(res);
}

exports.getUsers = function(req, res) {
    res.writeHead(200, {'content-type': 'Application/json'});
	fs.createReadStream('dataset.json').pipe(res);
}