function getPosts(callback){
    setTimeout(() => {
        //consider first parameter is response and second parameter is error 
        callback( [{title:"post1"},{title:"post2"}],null);
    },1000);
}

function getUsers(callback){
    setTimeout(() => {
        callback([{name : "Ehab"},{title: "Qino"}],null);
    },2000);
}

function getUser(callback){
    setTimeout(()=> {
        callback({name:"Ehab"},null);
    },500)
}

getUsers((users,err) => {
    if(err) throw err;
    console.log(users);
    getUser((user,err)=>{
        if(err) throw err;
        console.log(user);
        getPosts((posts,err)=>{
            if(err) throw err;
            console.log(posts); 
        })
    });
});
// getPosts((posts)=>{
//     console.log(posts);
// });

// getUsers((users)=>{
//     console.log(users);
// });


//Main Thread



// Event Loop