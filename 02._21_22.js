/**
* @param {string} string
* @param {string} char
* @return {boolean}
*/

var mostFrequentChar = function(string, char) {
    stringDict = {};
    for(i=0; i<string.length; i++)
    {
        if(!stringDict.hasOwnProperty(string[i]))
        {
            stringDict.put(string[i], 1);
        }
        else
        {
            stringDict[key]++;
        }
    }
    var charValue = stringDict[char];
    for(i=o; i<stringDict.length; i++)
    {
        if(stringDict[i] > charValue)
        {
            return false;
        }
    }
    return true;

}


console.log(mostFrequentChar("abbaccad", 'a'));