
/* //exercises in the slayts
const isUserValid=(pBool)=>{
    return true;
}

let answer = isUserValid(true) ? 'You may enter': 'Access denied';
let automatedAnswer = `Your acoount number is ${isUserValid(false) ? 
    '1234': 'not awailable'}`;

alert(answer);
alert(automatedAnswer);
*/

// const experiencePoints = ()=>{
//    return winBattle()? 10 : 1;
// }

// const winBattle=()=>{
//     let randomValue = Math.floor((Math.random()*100)+1);
//     return (randomValue%2 === 0)? true: false;
// }

// let info = {
//     even:0, odd:0
// }
// let value = 0;
// for (let counter =0; counter<100; counter++){
//     value = experiencePoints();
//     value === 10 ? info.even++ : info.odd++;
//     console.log(value);
// }

// console.log(`${info.even} generated 10 (true in winBattle) & 
//              ${info.odd} generated 1 (false in winBattle)`);


// let toDoList = {
//                 readABook : -1,
//                 makingSport : -1,
//                 meetWithFriends : -1,
//                 takeNewspaper : -1,
//                 workOnProject : -1,
//                 goShopping : -1,
//                 maditation : -1
// }

// //console.log(toDoList[`takeNewspaper`]);
// Object.keys(toDoList).map(function(key) {
//     // key: the name of the object key
//     // index: the ordinal position of the key within the object
//     let value = -1; 
//     value = prompt(`did you ${key} if yes please enter 1 otherwise please enter 0`);
//     (value === `1`) ? toDoList[key] = 1 : toDoList[key] = 0;   
//     //(value === `1`) ? toDoList.key = 1 : toDoList.key = 0;//doesn@t works   
//  });

// console.log(toDoList);

// const takeMessages = (pPerson)=>{
//     pPerson.messages.push(prompt(`what do you want to say`));
// }

// function person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
//     this.messages = [];
//     this.getMessage = ()=>{ // I will show this....
//         takeMessages(this)
//     };
//     this.infoDetails = function () {
//         console.log(this.messages)
//     }
//   }

//   let Yelda = new person(`yelda`,`aks`,30, `brown`);
//   //Yelda.infoDetails();
// //   Yelda.getMessage();
// //   Yelda.getMessage();

// //   Yelda.infoDetails();

//   console.log(typeof Yelda);
//new 
//  let obj1 = {doors: 2, windows: 8, rooms: 5};
//  for(let item of Object.values(obj1)){
//     console.log(item);  
//  }  

//  for(let item in obj1){
//     console.log(item);  
//  }  

// dataBaseFace.forEach((item)=>{
//     console.log(item);
// })    

// let cast = {
//     "Adm. Adama" : "Edward James Olmos",
//     "President Roslin" : "Mary McDonnell",
//     "Captain Adama" : "Jamie Bamber",
//     "Gaius Baltar" : "James Callis",
//     "Number Six" : "Tricia Helfer",
//     "Kara Thrace" : "Katee Sackhoff"
// };

//  // Stores the JavaScript object as a string
//  localStorage.setItem("Yelda", JSON.stringify(Yelda));

// // Parses the saved string into a JavaScript object again 
//  console.log(JSON.parse(localStorage.getItem("Yelda")));


// let obj = {doors: 2, windows: 8, rooms: 5};
// Object.keys(obj).forEach(function(property_name){
//   console.log(obj[property_name]);
// }); 

// //let obj = {doors: 2, windows: 8, rooms: 5};
// Object.values(obj).forEach(function(property_value){
//   console.log(property_value);
// });

// let list = ["doors", "windows", "rooms"];
// for(let x of list){
//   console.log(x);
// }     

// for(let ch of "hello"){
//     console.log(ch);
 // }   

// class Person {
//     constructor(name, age, married) {
//       this.name = name;
//       this.age = age;
//       this.isMarried = married;
//       this.hello = function() {
//         return `Hello ${this.name} your age is ${this.age}`;
//       }
//     }
//   }

//   let habil = new Person(`habil`, 40, true);

//   console.log(habil.hello());
//   const { age, name, isMarried } = habil;
//   console.log(name, age, isMarried);

// const name = "first name";
// const age = `her age`;

// const obj = {
//   [name]: "Susanne",
//   [age]: 38,
//   experience: 13
// }

// console.log(obj);


// const s1 = Symbol(``);
// const s2 = Symbol(1);
// console.log(s1);

// using this array,
let array = ["Banana", "Apples", "Oranges", "Blueberries"];
// Access and output Oranges.


// Remove the Banana from the array.
array.shift();
// console.log(array);
// Sort the array in order.
array.sort();
// Put "Kiwi" at the end of the array.
array.push(`Kiwi`);
// console.log(array);
// Remove "Apples" from the array.
array.splice(0,1);
// console.log(array);
// Sort the array in reverse order, i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])
array.reverse();
console.log(array);
// You should at the end have ["Kiwi", "Oranges", "Blueberries"]
