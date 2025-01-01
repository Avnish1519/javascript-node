let score="33"

console.log(typeof score);
console.log(typeof(score));//as a method score is passed

let valueInNumber= Number(score);
console.log(typeof valueInNumber);

let score1 = "3abc"
let valueInNumber1= Number(score1)
console.log(typeof valueInNumber1);
console.log(valueInNumber1);       //NaN-->Not a Number

/*for Number
"33"=>33
null=0;
undefined=NaN
true=1
String=NaN
*/

let score2 = 0
let valueInBoolean = Boolean(score2)
console.log(valueInBoolean);

//1 => true; 0=>false
// ""=> false
//"Avnish" =>true

let someNumber= 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);


