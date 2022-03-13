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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    let stringArr = []
    let hours = 0
    let newString = ""
    if(s.includes("PM")){
        stringArr = s.split(":");
        hours = parseInt(stringArr[0]);
        seconds = parseInt(stringArr[2])
        if(hours != 12){
            hours += 12;
        }
        newString = hours.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) + ":" + stringArr[1] + ":" + seconds.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
        return newString;
    }
    if(s.includes("AM")){
        stringArr = s.split(":");
        hours = parseInt(stringArr[0]);
        seconds = parseInt(stringArr[2])
        if(hours == 12){
            hours -= 12;
        }
        newString = hours.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) + ":" + stringArr[1] + ":" + seconds.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
        return newString;
    }

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}


function stringConverter(s) {
    let stringArr = []
    let hours = 0
    let newString = ""
    if(s.includes("PM")){
        stringArr = s.split(":");
        hours = parseInt(stringArr[0]);
        seconds = parseInt(stringArr[2])
        if(hours != 12){
            hours += 12;
        }
        newString = hours.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) + ":" + stringArr[1] + ":" + seconds.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
        return newString;
    }
    if(s.includes("AM")){
        stringArr = s.split(":");
        hours = parseInt(stringArr[0]);
        seconds = parseInt(stringArr[2])
        if(hours == 12){
            hours -= 12;
        }
        newString = hours.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) + ":" + stringArr[1] + ":" + seconds.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
        return newString;
    }

}

console.log(stringConverter("07:05:45AM"));
console.log(stringConverter("12:05:05AM"));
console.log(stringConverter("12:45:54PM"));