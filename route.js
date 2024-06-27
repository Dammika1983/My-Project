const http = require('http');
const url = require('url');

module.exports = http.createServer((req, res) => {
    let userOps = require('./controller.js');
    const reqUrl =  url.parse(req.url, true);// GET endpoint

    if(reqUrl.pathname == '/data' && req.method === 'GET') {
        userOps.getUsers(req, res);
    }

    if(reqUrl.pathname == '/' && req.method === 'GET') {
        userOps.getPage(req, res);
    }
 });