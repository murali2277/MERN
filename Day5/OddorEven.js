const num = [1,2,3,4,5,6,7,8,9,0];
const ans = num.map(n => (n%2===0 ? 'Even' : 'Odd'));
console.log(ans);

const labled = num.filter(n => n%2===0).map(n => n);
console.log(labled)

const result = {
    even: num.filter(n => n%2===0),
    odd: num.filter(n =>  n%2!==0)
}
console.log(result);