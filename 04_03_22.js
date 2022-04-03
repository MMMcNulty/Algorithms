/*
 * Complete the 'superDigit' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING n
 *  2. INTEGER k
 */

function superDigit(n, k) {
    var p = ''
    for(var i = 0; i < k; i++)
    {
        p = p + n;
    }
    console.log(p);
    return recurseSuperDigit(p);

}

function recurseSuperDigit(n) {
    if(n.length == 1) {
        n = parseInt(n);
        return n
    }
    else
    {
        let digits = n.split('');
        let sum = BigInt(0).valueOf();
        for(var i = 0; i<digits.length; i++)
        {
            sum = sum + BigInt(digits[i]).valueOf();
        }
        n = sum.toString();
        return recurseSuperDigit(n);
    }
}


console.log(superDigit('9875', 4));
