//Singleton

//object Literals

const mySym = Symbol("Key1")

const JsUser = {
    name : "Avnish", //Here name is declared as string
    //mySym : "MyKey1",//Not as symbol
    [mySym] : "MyKey2",//as symbol used
    age : 18,
    location : "Delhi",
    email : "avnish@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Wednesday"]

}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(typeof JsUser[mySym]);//passed as a symbol


JsUser.email = "avnishchatgpt.com"//to change value 
console.log(JsUser["email"]);

//Object.freeze(JsUser);//It prevents the modification of values of attributes
JsUser.email = "avnish@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");//function declaration
}
JsUser.greeting2 = function(){
    console.log(`Hello Js User,${this.name}`);//String Interpolation
}

console.log(JsUser.greeting);
console.log(JsUser.greeting2());








