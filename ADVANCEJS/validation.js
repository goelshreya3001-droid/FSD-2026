let text="hello World hello Hello ";
let regex=/hello/gi;
console.log(regex.test(text));//test method returns true if it is a substring \
// to check globally we use flag g 
// for in case sensitive flag used is i 
// . match method is used if you dont want to get output in boolean 
console.log(text.match(regex));
// common paterns:
// [abc]:either a or b or c 
//[a-z]:check lower case 
//[0-9]:check if numeric values present or not 
let g=/[0-9]/
console.log(g.test("abc1"));
// . -> any character and 
//^ carat : start of string 
//$: End of string 
//\d : any digits \w: word character \s:whitespace , + : if madontary something is present atleast once
let s=/^\d+$/
console.log(g.test("12344"));
//quantifiers 
//* 0 or more , ?--0 or 1 
//{n}: exactly n 
// {n,m}: between n and m 
let p = /\d{3}/;

console.log(p.test("abc1"));        // false
console.log("abc123".match(p));     // ["123"]
// grouping alternation 
//.replace()
let t ="hello world";
let result =t.replace(/world/,"javascript");
let result1=t.search(/world/);
console.log(result);
console.log(result1);
let text2="a,b,c";
console.log(text2.split(/./));