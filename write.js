const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'output.txt');

const writeStream = fs.createWriteStream(filePath,'utf8');

writeStream.write('This is the first line.\n');
writeStream.write('This is the second line.\n');
writeStream.end('This is the end line.\n'); 

writeStream.on('finish', () => {
    console.log('Finished writing to the file.');
});

writeStream.on('error', (err) => {
    console.error('Error while writing to the file:', err);
});