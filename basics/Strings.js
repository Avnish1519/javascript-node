const name="Avnish"
const repoCount = 4

//console.log(name + repoCount + " Value")

console.log(`My Name is ${name} and my github repo count is ${repoCount}`)//use of backticks (String interpolation)-placeholders are made to eject values

const Empname = new String("Avnish Singh")//String declare but as object

console.log(Empname[0])//0-->Key here and A refers to its object value
console.log(Empname.__proto__)   //object prototype

console.log(Empname.length)   //gives object length

console.log(Empname.toUpperCase())    //changes string to uppercase

console.log(Empname.charAt[5])    //tells character name at given index

console.log(Empname.indexOf('S'))   //gives index

const newString= Empname.substring(0,4)    //slices string into given parts 

console.log(newString)

const newString2= Empname.slice(-5,4) //also slices string but also takes negative value
console.log(newString2)

const name2= "   Avnish "
console.log(name2)
console.log(name2.trim())//trims extra spaces in strings

const url = "avnishsingh%20@google.com"
console.log(url.replace('%20','-'));//removes unwanted characters from strings

console.log(url.includes('avnish'));//tels if given character is present in the string or not

console.log(Empname.split(' '));//splits string on basics of characters provided to arrays



