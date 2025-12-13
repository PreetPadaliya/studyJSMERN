// const http = require('http');

// function requestListner(req,res){
//     console.log(req);
// }

// http.createServer(requestListner); //"requestListner" use reference of the function

const http = require('http');

const Server = http.createServer((req, res) => {  // Anonymous Arrow Function
    console.log(req);
});

const PORT = 3000;
Server.listen(PORT,()=>{                             //"listen" is method of "Server"
    console.log(`Server is running at http://localhost:${PORT}`);
}); 