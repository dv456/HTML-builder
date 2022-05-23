const path =require('path');
const {readdir} = require('fs/promises');
const filePath=path.join(__dirname,'secret-folder'); 
const fs = require('fs').promises;
async function fileRead() {
    try {
        const files = await readdir(filePath,{encoding: 'utf-8', withFileTypes: true});
        for (const file of files){
            if (file.isFile()) {               
                const way =path.join(__dirname, 'secret-folder',file.name);    
                const stats = await fs.stat(way);   
                console.log( `${file.name.split('.')[0]}  ${file.name.split('.')[1]} - ${stats.size/1000}kb\n`);                
            }
        }
        } catch (err) {
            console.error(err);
        }
    }
fileRead();
