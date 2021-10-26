// GIVEN
// console.log(example);
// var example = "I'm the example!";
//AFTER HOISTING BY THE INTERPRETER
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";

// console.log(hello);
// var hello = "world";


// var needle = 'haystack'; var hoisted to top
// function test(){
//         var needle = 'magnet';
//         console.log(needle);
//     }
// test(); function call moved to the bottom


// var example = "I'm the example!"; hoisted to the top
// console.log(example); runs

// var brendan = 'super cool'; 
//the function isnever called so changing brendan does nothing
// function print(){ 
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);
//************************

// //var is hoisted to the top 
// var food = 'chicken'; 
// //functin is hoisted to the top 
// function eat(){ 
// // var is hoisted to the top of this function
//     var food = 'gone';
//     food = 'half-chicken';
//     console.log(food);
// }
// eat();
// console.log(food);

//############

// // var hoisted to the top
// var mean = function() {
// // also var hoisted to the top of this function
//     var food = "fish";
//     food = "chicken";
//     console.log(food);
//     console.log(food);
// }
// // no gloable var for food => Error
// console.log(food);
// // mean is not a function
// mean();
// console.log(food);

//**********************
// // var hoisted to top
// var genre = "disco";
// //function hoisted to top
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// rewind();
// console.log(genre);
// console.log(genre);

//#####################
// // variable hoisted to the top
// dojo = "san jose";
// //function hoisted to the top
// function learn() {
// // also var inside hoisted to the top of this function
//     var dojo = "burbank";
//     dojo = "seattle";
//     console.log(dojo);
//     console.log(dojo);
// }
// learn();
// console.log(dojo);
// console.log(dojo);

//***************************

// //function hoisted to top
// function makeDojo(name, students){
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
// // CANNOT change the const type!!!!
//         dojo = "closed for now";
//     }
//     return dojo;
// }
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));


