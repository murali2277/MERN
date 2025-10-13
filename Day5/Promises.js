const myPromise = new Promise((resolve,reject) => {
    const success = true;
    if (success){
        resolve("Operation Successful!");
    }
    else{
        reject("Operation Failed!");
    }
})

myPromise.then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
})