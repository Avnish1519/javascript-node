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
