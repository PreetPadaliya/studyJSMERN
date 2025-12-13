const fs = require('fs');
fs.writeFile('example.txt', 'Hello, World!', (err) => {
    if (err) {
        console.log("Error Occured");
    }
    else{
        console.log("File Created Successfully");
    }
});