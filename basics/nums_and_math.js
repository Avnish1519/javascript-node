const score = 400

const balance = new Number(100)
console.log(balance);//Specifically tells 100 as Number-->[Number:100]

console.log(balance.toString().length);//Number is converted to string
console.log(balance.toFixed(2));//telling upto how much decimal values answer should come

const otherNumber = 23.8966//Constant variable

console.log(otherNumber.toPrecision(2));//Round offs the number to given digits

const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'));//Converts a number to a string by using the current or specified locale or symbols

// +++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++(By Default maths lib in js)

console.log(Math);//object providing mathematical operations
console.log(Math.round(4.5))//Rounds off no to nearest Number
console.log(Math.ceil(4.2));//Returns smallest Number
console.log(Math.floor(4.9));//Returns greatest Number at rounding
console.log(Math.min(4,3,6,8));//Min
console.log(Math.max(4,3,6,8));//Return Maximum of given numbers

console.log(Math.random());//Returns random values b/w (0 and 1)
console.log((Math.random()*10)+1);//after multiplying with 10 is converted b/w 0 to 9 
//adding 1 to it ensures no does'nt comes 0

const min =10
const max =20
console.log(Math.floor(Math.random()* (max -min + 1)) + min);//It defines min value must be added to answer and floor rounds it to the greatest Integer













