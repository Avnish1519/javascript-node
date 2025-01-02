//Stack(Primitive) , Heap(Non-Primitive)

let id="avnishsinghdotcom";

let anotherId = id;//copyOfAddress
anotherId="avnish1519"

console.log(id);
console.log(anotherId);

//Heap
let userOne = {
    email: "user@google.com",
    upi: "user@ybl"

}
let userTwo = userOne

userTwo.email = "avnish@google.com"

console.log(userOne.email);
console.log(userTwo.email);