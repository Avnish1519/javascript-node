//arrays

const myArr = [0,1,2,3,4,5];
console.log(myArr[1]);//index1 pos

const myHeros= ["Shaktiman","Police"]
console.log(myHeros);

const myArr2 = new Array(1,2,3,4,5);
console.log(myArr2.length);//printing the output


//Array methods
myArr.push(6);
console.log(myArr);

myArr.push(7)//appends new element at the last of the array
myArr.pop()//removes last element
console.log(myArr)

myArr.unshift(9)//shifts element from starting and adds 9 to first
myArr.shift()//shifts all elements in arrayin left and removes first element
console.log(myArr);

console.log(myArr.includes(5));//tells if element present in arr or not
console.log(myArr.indexOf(3));//tells index of arr element provided

const newArr = myArr.join();//Binds arr and converts to string

console.log(myArr);//type arr
console.log(newArr);//type String

//slice ,splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3)//returns a copy of section of an array
console.log(myn1);
console.log("B", myArr);

const myn2  = myArr.splice(1,3)//Removes element from an array and returns it
console.log("C", myArr);
console.log(myn2);












