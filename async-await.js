function myPromise(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(10);
            //reject("Errrrrr");
        },1000)

    });
}

async function getMyPromise(){
    try{
    const p = await myPromise();
    console.log(p);
    } catch(err) {
        console.log(err)
    }
}

getMyPromise();