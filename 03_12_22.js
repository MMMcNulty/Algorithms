'use strict';

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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    var min = Number.MAX_VALUE;
    var max = Number.MIN_VALUE;
    for(var i = 0; i<arr.length; i++) {
        var sum = 0;
        for(var j = 0; j<arr.length; j++)
        {
            if(j != i)
            {
                sum += arr[j];
            }
        }
        if(sum > max)
        {
            max = sum;
        }
        if(sum < min)
        {
            min = sum;
        }
    }
    console.log(min + " " + max)

}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
