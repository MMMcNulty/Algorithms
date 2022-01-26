function plusMinus(arr) {
    var n = arr.length;
    var negN = null;
    var negProp = null;
    var posN = null;
    var posProp = null;
    var zero = null;
    var zeroProp = null;

    for(var i = 0; i<arr.length; i++)
    {
        if(arr[i] > 0)
        {
            posN++;
        }
        if(arr[i] < 0)
        {
            negN++;
        }
        if(arr[i] == 0)
        {
            zero++;
        }
    }
    posProp = posN / n;
    console.log(posProp.toFixed(6));
    negProp = negN / n;
    console.log(negProp.toFixed(6));
    zeroProp = zero / n;
    console.log(zeroProp.toFixed(6));
}

plusMinus([-4, 3, -9, 0, 4, 1])