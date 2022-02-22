/**
* @param {string} string
* @param {string} char
* @return {boolean}
*/

var mostFrequentChar = function(string, char) {
    stringDict = {};
    for(var i=0; i<string.length; i++)
    {
        if(!stringDict.hasOwnProperty(string[i]))
        {
            console.log("entering " + string[i] + " into the dictionary");
            stringDict[string[i]] = 1;
        }
        else
        {
            stringDict[string[i]]++;
            console.log("adding " + string[i] + " and" + stringDict[string[i]] + " to my key value");
        }
    }
    var charValue = stringDict[char];
    for(key in stringDict)
    {
        console.log("running");
        if(stringDict[key] > charValue)
        {
            return false;
        }
    }
    return true;

}


console.log(mostFrequentChar("abbaccad", 'a'));
console.log(mostFrequentChar("abbbbaccad", 'a'));