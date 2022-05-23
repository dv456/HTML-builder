const fs=require('fs');
const path =require('path')
const filePath=path.join(__dirname,'text.txt'); 
const process = require('process');
const readline = require('readline');
const write = fs.createWriteStream(filePath);
write.write('Konnichiwa!\n')
const read = fs.createReadStream(filePath, 'utf-8', (err)=>{
    if(err){
        throw err;
    }
})
read.on('data', chunk => console.log(chunk));
const a = readline.createInterface({   
    input: process.stdin,
    output: process.stdout,
   });
a.on('line', (input) => {
    if (input === 'exit') {
        process.exit();
    }
    write.write(`${input}\n`);
})
process.on('SIGINT',() => {
    process.exit();
});
process.on('exit', () => {
    console.log('Arigato, sempai');
})
