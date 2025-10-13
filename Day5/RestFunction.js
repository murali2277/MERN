// Rest Opterator
function disply(...nums){
    console.log(nums);
}
disply(1,2,3);

// Spread Operator
const arr = [1,2,3];
console.log(...arr);

// Spread Mergeing Array
const a = [1,2,3];
const b = [4,5,6];
const combined = [...a,...b];
console.log(combined);

// Spread Using Object
const user = {'name':'MK'};
const details = {age:19};
const fullUser = {...user,...details};
console.log(fullUser);