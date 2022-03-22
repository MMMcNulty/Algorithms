function caesarCipher(s, k) {
    let lowerAlphaArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let upperAlphaArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    let lowerAlphaDict = {};
    let upperAlphaDict = {};
    let modifiedK = k % 26;
    for(var i = 0; i < lowerAlphaArray.length; i++)
    {
        lowerAlphaDict[lowerAlphaArray[i]] = i;
        upperAlphaDict[upperAlphaArray[i]] = i;
    }
    let newChar = '';
    let encryptedString = ""
    for(let c = 0; c < s.length; c++)
    {
        if(lowerAlphaDict.hasOwnProperty(s[c]))
        {
            
            let encryptIdx = ((lowerAlphaDict[s[c]] + modifiedK) % 26);
            newChar = lowerAlphaArray[encryptIdx];
        }
        else if (upperAlphaDict.hasOwnProperty(s[c]))
        {
            let encryptIdx = ((upperAlphaDict[s[c]] + modifiedK) % 26);
            newChar = upperAlphaArray[encryptIdx];
        }
        else 
        {
            newChar = s[c];
        }
        console.log(`modified k is ${modifiedK} char is ${s[c]}, new char is ${newChar}`)
        encryptedString = encryptedString += newChar;
    }
    return encryptedString;

}

// console.log(caesarCipher("middle-Outz", 2));

console.log(caesarCipher("www.abc.xy", 87));