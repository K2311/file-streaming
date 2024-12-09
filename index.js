const fs = require('fs');
const path = require('path');

const filePath  = path.join(__dirname,'test.txt');

const readStream = fs.createReadStream(filePath,'utf8');

readStream.on('data',(chunk)=>{
    console.log('Received chunk');
    console.log(chunk);
});

readStream.on('end',()=>{
    console.log('Finished reading the file');
});

readStream.on('error',(err)=>{
    console.error('Error while reading the file:', err);
});