const http = require("http");

http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "application/json"
    });
    let salida = {
        nombre: "Frank",
        edad: 28,
        url: req.url
    };
    //res.write("Hola Mundo");
    res.write(JSON.stringify(salida));
    res.end();
}).listen(80);

console.log("Listening on port 80");