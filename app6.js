localStorage.setItem("name","Ehab");
localStorage.setItem("age",25);
localStorage.setItem("isDeveloper",false);
localStorage.setItem("skills",JSON.stringify(["html","css","js"]));
localStorage.setItem("testObj",JSON.stringify({name:"Ehab",age:40}));

console.log(localStorage.getItem("name"));
console.log(localStorage.getItem("skills"));
console.log(JSON.parse(localStorage.getItem("skills")));
console.log(JSON.parse(localStorage.getItem("testObj")));