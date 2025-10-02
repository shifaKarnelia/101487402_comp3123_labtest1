//student id:-101487402
//student name:- shifa karnelia 

const fs = require('fs');
const path = require('path');


const path_Dir = path.join(process.cwd(),"logs")

if(fs.existsSync(path_Dir)){
    fs.readdirSync(path_Dir).forEach((file) => {
    const filePath = path.join(path_Dir, file);
     if (fs.statSync(filePath).isFile()) 
        {
            console.log(`Deleting file......... ${file}`);
            fs.unlinkSync(filePath);
            }
        });
    fs.rmdirSync(path_Dir);
  }
 else 
    {
        console.log("No Logs directory found.");
    }