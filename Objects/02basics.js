const tinderUser = new Object()//singleton object
const tinderUser1 = {}//non singleton object
console.log(tinderUser)
console.log(tinderUser1)

tinderUser.id = "1234abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "Avnish@google.com",
    fullname: {             //nested objects
        userfullname: {
            firstname: "Avnish",
            lastname : "Singh"
        }
    }
}
console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a",2: "b"}//{Key:"value"}
const obj2 = {3: "c",4: "d"}

const obj3 ={obj1 ,obj2};//doesn't merges the code just takes it as string
console.log(obj3)
