const http = require("http");
const fs = require("fs");
const url = require("url");

const sendData   = (fileName, res) => {
    fs.readFile(`${fileName}.html`, "utf-8", (err, data) =>{
        try{

        if(err){
            
            throw err;
        }
        
    } catch(err){
        console.log(err);
        
    }
    res.end();
    })
   
}

// const sendData   = (fileName, res) => {
//     fs.readFile(`${fileName}.html`, "utf-8", (err, data) =>{
//         try{

//         if(err.code === "ENOENT" || err.code === "EMFILE" || err.code === "EEXIST" || err.code === "EACCES" || err.code === "ENODIRmp"){
            
//             throw err;
//         }
//         res.end();
//     } catch(err){
//         console.log(err.name);
        
//     }
//     })
// }

http.createServer((req,res)=>{
   res.writeHead(200);
   const {query: {page} } = url.parse(req.url, true);

    switch (page) {
        case "home" : sendData("index", res); break;
        case "contact" : sendData("contac", res); break;
        case "news" : sendData("news", res); break;
        default: sendData("404", res); break;

    }    
}).listen(3000)    





