const num = [10,20,30,40,50];
const max = num.reduce((acc,curr) => {
    return curr>acc ? curr : acc;
},num[0]);
console.log(max);