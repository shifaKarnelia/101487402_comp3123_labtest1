//student id:-101487402
//student name:- shifa karnelia 

// create  a function named lowerCaseWords 
const lowerCaseWords = (MixedArr) =>{
 //return a promise 
    return new Promise((resolve,reject)=>{
       
            const filterArr = MixedArr.filter(ArrayItem => typeof ArrayItem === "string")
                            .map(StringArr => StringArr.toLowerCase());


        if (filterArr.length >0) {
            resolve(filterArr);            
        } else {
            reject("This array doesnot contain Any string element");
        }
    });   
}

//CREATE array
const MixedArray = ["SHIFA",10,true,"KARNELIA", 900 ]

//call funstion
lowerCaseWords(MixedArray).then(ans => console.log(ans))
.catch(error => console.log(error));