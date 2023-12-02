// const logger = require('./logger');
// logger.logMessage("My Message");

// const os = require('os');

// console.log(os.hostname())
// console.log(os.machine())
// console.log(os.platform())
// console.log(os.totalmem())
// console.log(os.userInfo());
// console.log(os.freemem());

// path

// const path = require('path');

// console.log(__dirname); 
// console.log(path.dirname(__dirname+'/app.js')); // home/user/projects/NODETraining
// console.log(path.extname(__dirname+'/app.js')); // javascript - .js

const fs = require('fs');
console.log('Before Call')

const server = require('http');

server.createServer(function (req, res) {

    // fs.readFile(__dirname+"/1.html",function(err,data){
    //     if(err){
    //         res.write("Error")
    //         return res.end();
    //     } else {
    //         res.writeHead(200,{'Content-Type':'text/html'});
    //         res.write(data);
    //         return res.end();
    //     }
    // });
    // var fsData;
    // try {
    //     fsData = fs.readFileSync(__dirname+"/11.html");
    //     res.writeHead(200,{'Content-Type':'text/html'});
    //     res.write(fsData);
    //     return res.end();
    // } catch(error){
    //     res.writeHead(400,{'Content-Type':'text/html'});
    //     res.write("Error reading File")
    //     return res.end();
    // }
    // fs.appendFile("1.txt", "New Content", function (err) {
    //     if (err) {
    //         res.writeHead(400, { 'Content-Type': 'text/html' });
    //         res.write("Error in Appending")
    //         return res.end();
    //     } else {
    //         res.writeHead(200, { 'Content-Type': 'text/html' });
    //         res.write('Append Success');
    //         return res.end();
    //     }
    // })

    //   fs.writeFile("1.txt", "New Content", function (err) {
    //     if (err) {
    //         res.writeHead(400, { 'Content-Type': 'text/html' });
    //         res.write("Error in Creating")
    //         return res.end();
    //     } else {
    //         res.writeHead(200, { 'Content-Type': 'text/html' });
    //         res.write('Create Success');
    //         return res.end();
    //     }
    // });

    // fs.rename("1.txt","2.txt",function (err) {
    //         if (err) {
    //             res.writeHead(400, { 'Content-Type': 'text/html' });
    //             res.write("Error in Rename")
    //             return res.end();
    //         } else {
    //             res.writeHead(200, { 'Content-Type': 'text/html' });
    //             res.write('Rename Success');
    //             return res.end();
    //         }
    // })

    // fs.unlink("2.txt",function (err) {
    //             if (err) {
    //                 res.writeHead(400, { 'Content-Type': 'text/html' });
    //                 res.write("Error in Delete")
    //                 return res.end();
    //             } else {
    //                 res.writeHead(200, { 'Content-Type': 'text/html' });
    //                 res.write('Delete Success');
    //                 return res.end();
    //             }
    //     });
    console.log("req query" + req.url)
    //  var urlString = "http://localhost:5500/html/products?category=smartphones";
    var aProductData = require('./products');
    const url = require('url');
    const oParse = url.parse(req.url, true);
    //   console.log(oParse.search);
    //  console.log(oParse.pathname);
    //   console.log(oParse.query);
    //  var sCategory = oParse.query.category;
    var aProductFilter = [];
    if (!oParse.search) {
        aProductFilter = aProductData;
    } else {
        var aDynamicKey = Object.keys(oParse.query);
        console.log(aDynamicKey);
        var sKey = aDynamicKey[0];
        var sValue = oParse.query[sKey];
        aProductFilter = aProductData.filter(function (e) {
            return e[sKey] == sValue
        });

    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(JSON.stringify(aProductFilter));
    return res.end();
    
}).listen(3005)

console.log('After Call');


