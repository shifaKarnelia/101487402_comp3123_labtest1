//student id:-101487402
//student name:- shifa karnelia 

//Create a method resolvedPromise that is similar to 
//delayedSuccess and resolves a message after a timeout of 500ms. 

const resolvedPromise =() =>{
    //return promise 
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("message : delayed Success!")
        },500);
    });
}
//Create a method rejectedPromise that is similar to 
//delayedException and rejects an error message after a timeout of 500ms.
const rejectedPromise =()=>{
    //return promise
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            reject("Error : delayed execption" )
        },500)
    })

}


//call function
resolvedPromise().then((message)=>console.log(message));
rejectedPromise().catch((error)=>console.log(error));
