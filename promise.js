
let myPromise = new Promise((resolve,reject) => {

    setTimeout(()=>{
       // resolve("Hello from Ehab");
        reject("Errrrrrrrrrrr error")
    },1000);
    
});

//console.log(myPromise);

myPromise.then((res)=>{
    console.log(res);
    console.log(myPromise);
},
(err)=>{
    console.log(err);
    console.log(myPromise);
}
);

