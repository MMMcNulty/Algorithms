'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'findMedian' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function findMedian(arr) {
    let median = null;
    arr.sort();
    if(arr.length % 2){
        median = Math.floor(arr.length/2)
    }
    else {
        median = arr.length/2
    }
    console.log(`the sorted array is ${arr}`)
    console.log(`the median index is ${median}`)
    return arr[median]

}

console.log(findMedian([0,1,2,4,6,5,3]));

function lonelyinteger(a) {
    var integerDict = {};
    for(var i = 0; i <a.length; i++){
        if(integerDict.hasOwnProperty(a[i])){
            integerDict[a[i]] += 1;

        }
        else {
            integerDict[a[i]] = 1;
        }
    }
    console.log(integerDict);
    for(var j = 0; j < a.length; j++){
        if(integerDict[a[j]] == 1)
        {
            console.log(`the lonely integer is: ${a[j]}`)
            return a[j];
        }
    }
}

console.log(lonelyinteger([1,2,3,4,3,2,1]));
console.log(lonelyinteger([1,2,5,3,4,4,3,2,1]));

function diagonalDifference(arr) {
    
    var primary = 0;
    for(var i = 0; i < arr[0].length; i++)
    {
        console.log(`adding ${arr[i][i]} to ${primary}`)
        primary += arr[i][i];
        
    }
    var secondary = 0;
    var x = 0;
    for(var j = arr.length - 1; j >= 0; j--)
    {
        console.log(`adding ${arr[j][x]} to ${secondary}`)
        secondary += arr[j][x];
        x++;
    }
    var difference = primary - secondary;
    var absoluteDifference = Math.abs(difference)
    return absoluteDifference;
}