

//? QUESTION 1
//print odds 1-20 - write a loop that console.log all odd values b/w 1-20

function printOdds() {
    for (var i = 1; i <= 20; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}
//! printOdds();

//While loop version
function printOdds2() {
    let index = 1;
    target = 20;
    while (index <= target) {
        if (index % 2 !== 0) {
            console.log(index);
        }
        index++;
    }
}
//! printOdds2();

//? QUESTION 2
//decreasing multiples of 3 - using a looop - console.log all values that are evenly divisible by 3 b/w 100-0

function decreasingMult() {
    for (var i = 100; i >= 0; i--) {
        if (i % 3 == 0) {
            console.log(i);
        }
    }
}
//! decreasingMult();

//? QUESTION 3
//print sequence - use a loop to console.log values in the sequence (4, 2.5, 1, -0.5, -2, -3.5)
function printSeq(arr) {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        console.log(element);
    }
}
//! printSeq([4, 2.5, 1, -0.5, -2, -3.5]);

//? QUEASTION 4
//sigma - write code that will add all of the value from 1-100 onto some variable sum and at the end console.log the result 1+2+3+... +98+99+100. We should get back 5050 at the end

function sigma() {
    let sum = 0;
    for (let i = 0; i <= 100; i++) {
        sum += i; //sum + the value of i (aka sum = sum + i)
    }
    console.log(sum);
}
//! sigma(); //expected output 5050


//? QUESTION 5
//factorial - write code that will multiply all the values from 1-12 onto some variable product and at the end console.log the result 1 * 2 * 3 * ... * 10 * 11 * 12. should get back 479001600 @ end

function factorial() {
    let product = 1; //NOTE THAT THIS DECLARATION CAN'T BE "0"
    for (let i = 1; i <= 12; i++) {
        product *= i;
    }
    console.log(product);
}
//!factorial();

