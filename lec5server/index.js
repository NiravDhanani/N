const http = require('http');
const port = 9500
const fs = require('fs');
const handle = require(`./server`)
const server = http.createServer(handle);

server.listen(port,(err)=>{
    if(err){
        console.log(`page not found`);
        return false;
    }
    console.log(`start on port ${port}`);
})