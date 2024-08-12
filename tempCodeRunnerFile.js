const fs = require('fs');
const path = require('path');

const dirPath = 'D:\\js == 1\\Chota mota backend\\Clear the clutter';
const files = fs.readdirSync(dirPath);

files.map((ele,_)=>{
    if(!fs.existsSync(dirPath + `\\${path.extname(ele)}`)){
        fs.mkdirSync(dirPath + `\\${path.extname(ele)}`);
    }
    fs.renameSync(dirPath+`\\${ele}`,dirPath+`\\${path.extname(ele)}`);
})