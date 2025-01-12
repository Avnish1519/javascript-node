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
const obj4 = {5: "e",6: "f"}


const obj3 ={obj1 ,obj2};//doesn't merges the code just takes it as array element
console.log(obj3)

const Obj3= Object.assign({},obj1, obj2,);//merges both the objects into one Object.assign(tagret,source)
console.log(Obj3);

const oBj3= {...obj1,...obj2}//spreads the values then add to obj3
console.log(oBj3)



