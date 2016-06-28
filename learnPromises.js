/*jslint plusplus: true, node: true, devel: true */
/*global Promise*/

"use strict";

function numPromise(numIn) {
   return new Promise(function (fulfill, reject) {
      fulfill(numIn);
   });
}

function add1(numIn) {
   return new Promise(function (fulfill, reject) {
      setTimeout(function () {
         fulfill(numIn + 1);
      }, 1000);
   });
}

function add2(numIn) {
   return new Promise(function (fulfill, reject) {
      setTimeout(function () {
         fulfill(numIn + 2);
      }, 1000);
   });
}

function add3(numIn) {
   return new Promise(function (fulfill, reject) {
      setTimeout(function () {
         fulfill(numIn + 3);
      }, 1000);
   });
}

function print(numOut) {
   console.log("numOut:", numOut);
}

add1(5)
   .then(print); //1 seconds from start output 6
//or
numPromise(5)
   .then(add1)
   .then(print); //1 seconds from start output 6

//no real async so no wait
numPromise(5)
   .then(print); //0 seconds from start output 5

// 4 then adds so 4 seconds
numPromise(6)
   .then(add1)
   .then(add2)
   .then(add1)
   .then(add3)
   .then(print); //4 seconds from start output 13

//with for loop make a promise obj 0 then add 6, 3 times with 3 seconds each 
var hi = numPromise(0),
   i;
for (i = 0; i < 3; ++i) {
   hi = hi.then(add1)
      .then(add2)
      .then(add2)
      .then(add2)
      .then(add2)
      .then(add3);
}
console.log(typeof hi);
hi.then(print); //9 seconds from start output 18