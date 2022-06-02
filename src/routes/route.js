 const express = require('express');
//const externalModule = require('./logger')
const logger = require('../logger/logger')
 const helper = require('../utill/helper')
const validator = require('../validator/formatter')
const lodash = require('lodash')
//const express = require("express");

const router = express.Router();
router.get('/test-me', function (req, res) {
       //const d="Welcome to Radon" 
    // console.log('The constant in logger route has a value '+externalModule.endpoint)
    // console.log('The current batch is '+externalModule.batch)
    // externalModule.log()
    logger.welcome()
     helper.getBatchInfo()
     console.log(helper.printDate)
     console.log(helper.printMonth)
     validator.formatter()   
     

//    console.log(formatter.changetoUpperCase = d)
    res.send('My first ever api!')
});

router.get('/test-me1', function (req, res) {
    res.send('My second ever api!')
});

router.get('/test-me2', function (req, res) {
    res.send('My third api!')
});

router.get('/test-me3', function (req, res) {
    res.send('My 4th api!')
});

router.get('/test-me4', function (req, res) {
    res.send('My last api!')
});
 // assignment 4(a)
 const month = ["january","february","march","april","may","june","july","august","september","october","novembe","december"];
 console.log(lodash.chunk(month,3));
 //assignment 4(b)
 const numb = [1,3,5,7,9,11,13,15,17,19];
 console.log(lodash.tail(numb))

 //assignment 4(c)
 const a =[1,1,3,4,5,4];
 const b= [3,3,4,6,3,6];
 const c= [9,8,9,7,6,5];
 const d= [1,5,6,4,5,6];
 const e= [3,4,2,5,7,4];
 console.log(lodash.union([a,b,c,d,e]));

 const  movieGenre= [["horror","The Shining"],["drama","Titanic"],["thriller Shutter Island"],["fantasy","Pans Labyrinth"]]
 console.log(lodash.fromPairs(movieGenre));

module.exports = router;
// adding this comment for no reason



//const { application } = require("express");

// const app = express.Router();

// app.get("/sol1", function (req, res) {
//      //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
// let arr= [1,2,3,5,6,7]
// let missingNumber

// for (let i = 1; i <= 7; i++) {
//     if (arr.indexOf(i) === -1) {
//         missingNumber = i
//     }
// }
//   ///LOGIC WILL GO HERE 

//   res.send( { data: missingNumber } );
// });



