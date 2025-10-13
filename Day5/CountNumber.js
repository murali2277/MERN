const num = [1,1,2,2,2,3,4,4,5,6,7];
const result = num.reduce((acc,n) => {
    acc[n] = (acc[n] || 0) + 1;
    return acc;
},{});
console.log(result);