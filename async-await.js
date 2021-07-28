function myPromise(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(10);
            //reject("Errrrrr");
        },1000)

    });
}

/*
async function getMyPromise(){
    try{
    const p = await myPromise();
    console.log(p);
    } catch(err) {
        console.log(err)
    }
}
*/

function myPromise3(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(30);
            //reject("Errrrrr");
        },500)

    });
}

async function getMyPromise(){
    try{
    const p1 = await myPromise();
    const p2 = await myPromise3();
    console.log(p1 , p2);
    } catch(err) {
        console.log(err)
    }
}
getMyPromise();