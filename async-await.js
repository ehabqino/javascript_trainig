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
//getMyPromise();

//Fetch Example
/*
function getPostsFromApi(){
    fetch("https://jsonplaceholder.typicode.com/posts").then((res)=>{
        //console.log(res);
        return res.json()
    }).then((posts)=>{
        console.log(posts);
        render(posts);
    });
}
*/
async function getPostsFromApi(){
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();
    render(posts);
}
getPostsFromApi();

function render(posts){
    let output = '';
    posts.forEach(element => {
        output += `<h1>${element.title}</h1>` ;

    });
    document.body.innerHTML = output;
}