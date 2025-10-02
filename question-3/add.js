//student id:-101487402
//student name:- shifa karnelia 

const fs = require('fs');
const path = require('path');


const path_Dir = path.join(process.cwd(),"logs")

!fs.existsSync(path_Dir)?fs.mkdirSync("logs"):console.log("folder is alredy exsite");

process.chdir(path_Dir)

for(let j=1; j<=10 ;j++){
    fs.writeFileSync(`logs${j}.txt`,"Just demo txt file");
    console.log(`logs${j}.txt`)

}