// console.log(2>1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

console.log("2" > 1);//true as it converts string to int directly
console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);//Equality and comparisons work different in js null-->0 in comparisons

console.log(undefined == 0);//false
console.log(undefined > 0);
console.log(undefined < 0);

console.log("2" === 2);//Strict check don't convert string to int(false)

