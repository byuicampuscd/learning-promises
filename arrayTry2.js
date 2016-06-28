/*jslint plusplus: true, node: true, devel: true */
/*global Promise*/

"use strict";

function numPromise(numsIn) {
   return new Promise(function (fulfill, reject) {
      fulfill(numsIn);
   });
}

function add1(numsIn) {
   return new Promise(function (fulfill, reject) {
      setTimeout(function () {
         numsIn[0] = numsIn[0] + 1;
         fulfill(numsIn);
      }, 1000);
   });
}

function add2(numsIn) {
   return new Promise(function (fulfill, reject) {
      setTimeout(function () {
         numsIn[0] = numsIn[0] + 2;
         fulfill(numsIn);
      }, 1000);
   });
}

function add3(numsIn) {
   return new Promise(function (fulfill, reject) {
      setTimeout(function () {
         numsIn[0] = numsIn[0] + 3;
         fulfill(numsIn);
      }, 1000);
   });
}

function strachOne(numsIn) {
   return new Promise(function (fulfill, reject) {
      //take one off
      numsIn.shift();
      fulfill(numsIn);
   });
}

function print(numsIn) {
   return new Promise(function (fulfill, reject) {
      //print and keep going
      console.log("numsIn:", numsIn);
      fulfill(numsIn);
   });
}



numPromise([1, 2, 3, 4, 5])
   .then(add1)
   .then(print)
   .then(strachOne)
   .then(print);


//with for loop make a promise obj 0 then add 6, 3 times with 3 seconds each 
var hi = numPromise([6, 7, 8, 9]),
   i;
for (i = 0; i < 3; ++i) {
   hi = hi.then(add1)
      .then(print)
      .then(strachOne)
      .then(print);
}
console.log(typeof hi);
