const http = require('http');
const requestHandler = require('./ParsingReq');

const Srever = http.createServer(requestHandler);



    const PORT = 3000;
Srever.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})