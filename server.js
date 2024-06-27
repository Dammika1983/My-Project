const http = require('http');

const PORT = 3000;

const server = require('./route.js'); // imports the routing file
server.listen(PORT, () => {  
    console.log(`Server running at PORT:${PORT}/`);
});
