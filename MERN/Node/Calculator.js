const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');

    if (req.url === '/' && req.method === 'GET') {
        res.write('<html>');
        res.write('<head><title>Calculator</title></head>');
        res.write('<body><h1>Welcome to the Calculator</h1>');
        res.write('<a href="/calculator">Go to Calculator</a>');
        res.write('</body></html>');
        return res.end();
    }

    else if (req.url.toLowerCase() === '/calculator' && req.method === 'GET') {
        res.write('<html><body>');
        res.write(`
            <form action="/calculate-result" method="POST">
                <label>Number 1:</label>
                <input type="number" name="num1" /><br><br>
                <label>Number 2:</label>
                <input type="number" name="num2" /><br><br>
                <button type="submit">Sum</button>
            </form>
        `);
        res.write('</body></html>');
        return res.end();
    }

    // ✅ YOUR REQUIRED LOGIC (POST + body)
    else if (req.url.toLowerCase() === '/calculate-result' && req.method === 'POST') {
        const body = [];

        req.on('data', (chunk) => {
            body.push(chunk);
        });

        req.on('end', () => {
            const fullBody = Buffer.concat(body).toString();
            const params = new URLSearchParams(fullBody);
            const bodyObj = Object.fromEntries(params);

            const num1 = parseFloat(bodyObj.num1);
            const num2 = parseFloat(bodyObj.num2);
            const result = num1 + num2;

            res.write('<html>');
            res.write('<head><title>Result</title></head>');
            res.write(`<body><h1>Result: ${result}</h1>`);
            res.write('<a href="/calculator">Back</a>');
            res.write('</body></html>');
            return res.end();
        });
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
