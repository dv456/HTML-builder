const fs=require('fs');
const path =require('path')
const filePath=path.join(__dirname,'text.txt'); 
const read = fs.createReadStream(filePath, 'utf-8', (err)=>{
    if(err){
        throw err;
    }
})
read.on('data', chunk => console.log(chunk));
