console.log("hello world");
console.warn("This is warning");
console.error("something went wrong");
console.info("this is my first js code");
console.table([{name:"A"},{name:"B"}]);
console.time("loop");
for(let i=0;i<10000;i++){}
console.timeEnd("loop");
console.log("final line");
function add(p,q){
    return p+q;
}
console.log(add(10,20));
//arrow function:similiar to lambda function 
const multiply=(p,q)=>p*q;// why we are using const here?? we use arrow function to reduce time and const is used because we dont want to change the value.
console.log("arrow function",multiply(5,5));

// array
let arr=[10,20,30,40,50];
console.log(arr[0]);
arr.push(20);
console.log(arr);
arr.pop();
console.log(arr);

//object:similar to dictionaries
let student={
    name:"Shreya",
    age:"20",
    course:"btech",
};
console.log(student.name);
//primitive data type using programmiing language is not completely oops.

//date 
let today=new Date();
console.log(new Date());

//mathn function
console.log(Math.sqrt(25));
console.log(Math.random(10,20,30));
//string
t="hello world";
console.log(t.length);
console.log(t.toUpperCase());
console.log(t.toLowerCase());
console.log(t.includes("java"));//to check whether the substring is in string or not.

//type conversion 
let strnum="123"
let convert=Number(strnum);
console.log(convert);

//NaN
console.log(isNaN("abc"));
console.log(isNaN(123));

//DOM MANIPULATION
setTimeout(()=>{
    console.log("executed after 2 seconds");//decide time after which time it will execute.
},2000);

//try catch:throw findly;try catch;in java throw throws all thse are used to find errors 
try{
    let result =x/0;
    console.log(result);
}catch(error){
    console.log("error");

}

//if-else
    let num = 10;

if (num > 0) {
    console.log("Positive");
} else if (num < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}
 
//switch
let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
}


