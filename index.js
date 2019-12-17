// const http = require('http');
// const url = require('url');
// const fs = require('fs');

// const sendData = (fileName,res) =>{
//    fs.readFile(`${fileName}.html`,'utf-8',(err,data) =>{
//       try{
//          if(err.code === 'ENOENT' || err.code === 'EEXIST' || err.code === 'EMFILE' || err.code === 'EISDIR' || err.code === 'ENOTDIR'){
//             trow (err)
         
//          };
     
//       }catch (err){
//          console.log(err.name),
//          console.log(err.message)
//       }
      
//    });
  
//    res.end()
// };

// http.createServer((req,res) =>{
//    res.writeHead(200);

//    const {query:{page}} = url.parse(req.url,true);

//    switch(page){
//       case 'home':sendData('index',res);break;
//       case 'contact':sendData('contact',res);break;
//       case 'news':sendData('news',res);break;
//       default:sendData('404',res);break;
//    }
// }).listen(3000);


// function test (a){
//    let x = 0 ;
//    for(let i = 0; i<a; i++){
//      x = i;
//    }
//    return x;
// }

// console.time('func');
// test (5000);
// console.timeEnd('func');

// console.log(process.version);
// console.log(process.platform);
// console.log(process.title);
// console.log(process.moduleLoadList);

// const fs = require('fs');
// const args = process.argv.slice(2);

// if(args[0] === '--file' && args[1]){
//    fs.readFile('./'+args[1] + '.txt','utf-8',(err,data) =>{
//       console.log(data);
//    });
// }

// if(args[0] === '--css' && args[1]){
//    fs.readFile('./'+args[1] + '.css','utf-8',(err,data) =>{
//       console.log(data);
//    });
// 

const fs = require('fs');
const arg = require('minimist')(process.argv.slice(2));

function getFileContent(fileName){
   fs.readFile(`./${fileName}`,'utf-8',(err,data) =>{
      if(err){
         console.log(`./${fileName}.txt not found`);
      }else{
         console.log(data)
      }
   });
}

if(arg.f || arg.file){
   const fileName = arg.f || arg.file;
   getFileContent(`${fileName}.txt`)
}  

if(arg.c || arg.css){
   const fileName = arg.c || arg.css;
   getFileContent(`${fileName}.css`)
} 