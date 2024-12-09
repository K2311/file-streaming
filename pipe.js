const fs = require('fs');
const path = require('path');

const sourcePath = path.join(__dirname,'pipesource.txt');
const destinationPath = path.join(__dirname,'pipedestination.txt');

const readStream = fs.createReadStream(sourcePath,'utf8');
const writeStream = fs.createWriteStream(destinationPath,'utf8');


readStream.pipe(writeStream);
readStream.on('end',()=>{
    console.log('File read all data.');
});
writeStream.on('finish', () => {
    console.log('File copied successfully.');
});

readStream.on('error', (err) => {
    console.error('Error while reading the file:', err);
});

writeStream.on('error', (err) => {
    console.error('Error while writing the file:', err);
});