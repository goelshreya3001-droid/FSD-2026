// deep copy
let user={
    name:"shreya",
    age:18,
    address:{
        city:"delhi"
    }
};
let deepcopy=JSON.parse(JSON.stringify(user));
deepcopy.address.city="numbai";
console.log(user);
console.log(deepcopy);
