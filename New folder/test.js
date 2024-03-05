const fs = require('fs')

fs.mkdirSync('testFolder')

fs.writeFileSync('testFolder/new.txt','welcome ')
fs.appendFileSync('testFolder/new.txt','hello nirav Dhanani')
fs.appendFileSync('testFolder/new.txt','    kem cho   hello nirav Dhanani')


const data = fs.readFileSync('testFolder/new.txt','utf8');
console.log(data);  

fs.renameSync('testFolder/new.txt','testFolder/old.txt');
fs.unlinkSync('testFolder/old.txt');
fs.rmdirSync('testFolder');