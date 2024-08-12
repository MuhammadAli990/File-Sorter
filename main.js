const prompt = require('prompt-sync')();
const fs = require('fs');
const path = require('path');

const dirPath = prompt('Enter the path of your folder: ');
const files = fs.readdirSync(dirPath);

files.map((ele,_)=>{
    if(!fs.existsSync(dirPath + `\\${(path.extname(ele)).slice(1)}`)){
        fs.mkdirSync(dirPath + `\\${(path.extname(ele)).slice(1)}`);
    }
    fs.renameSync(dirPath+`\\${ele}`,dirPath+`\\${(path.extname(ele)).slice(1)}\\${ele}`);
})