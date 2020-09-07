import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data */

// (a) Home Team name for 2014 world cup final
// console.log(fifaData["2014"]["Final"]["Home Team Name"])
console.log(fifaData[828]["Home Team Name"])
// (b) Away Team name for 2014 world cup final
console.log(fifaData[828]["Away Team Name"])
// (c) Home Team goals for 2014 world cup final
console.log(fifaData[828]["Home Team Goals"])
// (d) Away Team goals for 2014 world cup final
console.log(fifaData[828]["Away Team Goals"])
// (e) Winner of 2014 world cup final 
console.log(fifaData[828]["Win conditions"])

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data){
    const theFinalList = data => data.Stage === "Final";
    const finalist = data.filter(theFinalList);
    return (finalist);
}
console.log(getFinals(fifaData))

// function getFinals(data) {
//     const theFinalist = []
//   for(let i =0; i <= data.length; i++){
//   if( data[i].Stage === "Final" ){
//       theFinalist.push(data[i])
//   }
// }
//   return theFinalist

// };
// console.log(getFinals(fifaData))

// function theFinalList(data){
// let finalist= data => data.Stage ==="Final";
// return (finalist)
// }
//  console.log(theFinalList(fifaData))


/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

// function getYears(array) {
// const finalYears = getFinals(array).map();

// console.log(getYears(fifaData));

// function getYears(array) {
// const winningYears = getFinals(array).map(getFinals(array) => getFinals(array).Name)  
// }
// console.log(getYears(fifaData))

function getYears(array) {
const winningYears = getFinals(array).map(data => data.Year)
return (winningYears)  
    }
    console.log(getYears(fifaData))

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

// Not all of the winning conditions are written out for the finals. Ontop of that the data isnt set up in a way that says "this person won" I need to set up a function that looks through the away team score and the home team score, and return the name of the team whos score was highest in each finals game. Im not sure how to do this with out using an if else statemnent. 

// function getWinners(array) {
// const winners = {}
// getFinals(array)
//     if("Home Team Goals" >= "Away Team Goals"){
//         winners.push("Home Team Name")
//     }
//     else {winners.push("Away Team Name")}
// };

// console.log (getWinners(fifaData));

function getWinners(array) {
    const winners = {}
  for(let i =0; i < getFinals.length; i++)
    if(getFinals[i]["Home Team Goals"] >= getFinals[i]["Away Team Goals"]){
        winners.push ("Home Team Goals")
    }
    
    console.log (getWinners(fifaData));

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(/* code here */) {

};

getWinnersByYear();

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(/* code here */) {

    /* code here */

};

getAverageGoals();

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
