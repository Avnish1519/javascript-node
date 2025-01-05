const marvel_heros = ["Spiderman","IronMan","Thor"]
const dc_heroes = ["Thor","IronMan","Hulk"]

//marvel_heros.push(dc_heroes);//returns an array with inside an array as it takes another arr as single element

//console.log(marvel_heros);

const allHeros = marvel_heros.concat(dc_heroes)
console.log(allHeros);//object

const all_new_heros= [...marvel_heros, ...dc_heroes]//way to concat two arrays
console.log(all_new_heros);

const another_array =[1,2,3,[4,5,6],7,[6,7]]
const real_another_array = another_array.flat(Infinity)//recusrion depth is given and it concat all subarrays
console.log(real_another_array);

console.log(Array.isArray("Avnish"))//Tells if array or not
console.log(Array.from("Avnish"));//Creates an array from object given
console.log(Array.from({name:"Avnish"}));//returns empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1 ,score2 ,score3));//reurns a new array from the set of elements












