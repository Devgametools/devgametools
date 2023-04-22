'use strict'

const http = require('http')
const port = process.env.PORT || 4000
const server = http.createServer(requestHandler)

function requestHandler ( req , res) {
   res.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});
   res.write(`Pagina en construccion, servidor activo` , "utf-8");
   res.end()
}

server.listen(port, () => console.log(`Servidor activo`) );