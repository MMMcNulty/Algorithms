function countingSort(arr, n) {
    const frequencyArr = new Array(n).fill(0);

    for(var i = 0; i<arr.length; i++)
    {
        frequencyArr[arr[i]] += 1;
    }
    console.log(frequencyArr);
    return frequencyArr;
};

console.log(countingSort([1,2,3,5,7,7,8,4,3]))

// function flippingMatrix(matrix) {
//     // Write your code here

// }

