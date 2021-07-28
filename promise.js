/*
let myPromise = new Promise((resolve,reject) => {

    setTimeout(()=>{
        //resolve("Hello from Ehab");
        reject("Errrrrrrrrrrr error")
    },1000);
    
});

//console.log(myPromise);

myPromise.then((res)=>{
    console.log(res);
    console.log(myPromise);
}).catch((err)=>{           ///.catch as same as myPromise.catch , this is a chain method
    console.log("Error",err);
});

// myPromise.catch((err)=> {
//     console.log("Error",err);
// });
*/

function myPromise(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(10);
            //reject(500);
        },1000)

    });
}

// myPromise().then((res)=>{
//     console.log(res);
//     console.log(myPromise());
// }).catch((err)=>{
//     console.log("Error",err);
//     console.log(myPromise());
// })

///user more than one then with promise
myPromise().then((res)=>{
    console.log(res);
    return res*2;
}).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log("Error",err);
})