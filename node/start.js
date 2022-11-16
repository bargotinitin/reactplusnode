const d = require('./file1')

let a = 10
let b = 20

console.log(a + b)
console.log(d)

var fs = require('fs');
fs.writeFileSync("hello.txt", "My first file in Node js")

const filePath = __dirname + '/hello.txt';
fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
    if (!err) {
        console.log('received data: ' + data);
        // response.writeHead(200, {'Content-Type': 'text/html'});
        // response.write(data);
        // response.end();
    } else {
        console.log(err);
    }
});

console.log(__dirname)
console.log(__filename)
