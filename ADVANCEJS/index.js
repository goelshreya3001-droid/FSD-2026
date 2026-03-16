/*
let user={
    name:"shreya",
    age:20,
    address:{
        city:"bsr",
        pincode:203205,
    }
};
/*
let copyuser={...user}; //spread operator
copyuser.address.city="mumbai";
console.log(user);
console.log(copyuser);
*/

//operator object and assign method
let copyuser=Object.assign({},user);
copyuser.address.city="delhi";
console.log(user);
console.log(copyuser);


// shallow copy with the help of array
let arr=[1,2,3];
let arrcopy={...arr};
arrcopy[0]=10;
console.log(arr);
console.log(arrcopy)

let user=[
    {
        name:"shreya"
    },
    {
        name:"parv"
    }
]
let usercopy=[...user];
usercopy[0].name="swati"
console.log(user);
console.log(usercopy);
