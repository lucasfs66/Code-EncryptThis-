/* 
Acknowledgments:
I thank yvonne-liu for the idea and for the example tests :)

Description:
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.

You need to encrypt each word in the message using the following rules:

The first letter must be converted to its ASCII code.
The second letter must be switched with the last letter

Keepin' it simple: There are no special characters in the input.
Examples:

encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
*/

let encryptThis = function(text) {
    let result = ""
    let arrayOfWords = text.split(" ")
    let numberSwicth = {
        "A": 65,
        "B": 66,
        "C": 67,
        "D": 68,
        "E": 69,
        "F": 70,
        "G": 71,
        "H": 72,
        "I": 73,
        "J": 74,
        "K": 75,
        "L": 76,
        "M": 77,
        "N": 78,
        "O": 79,
        "P": 80,
        "Q": 81,
        "R": 82,
        "S": 83,
        "T": 84,
        "U": 85,
        "V": 86,
        "W": 87,
        "X": 88,
        "Y": 89,
        "Z": 90,
        "a": 97,
        "b": 98,
        "c": 99,
        "d": 100,
        "e": 101,
        "f": 102,
        "g": 103,
        "h": 104,
        "i": 105,
        "j": 106,
        "k": 107,
        "l": 108,
        "m": 109,
        "n": 110,
        "o": 111,
        "p": 112,
        "q": 113,
        "r": 114,
        "s": 115,
        "t": 116,
        "u": 117,
        "v": 118,
        "w": 119,
        "x": 120,
        "y": 121,
        "z": 122
    }
    for(g = 0; g < arrayOfWords.length; g++){

        for(let i = 0; i < arrayOfWords[g].length; i++){
            if(i === 0 && text.length <= 1){
                result += `${numberSwicth[arrayOfWords[g][i]]}`
                return result
            }else if(i === 0){
                result += `${numberSwicth[arrayOfWords[g][i]]}`
            } else if(i === 1){
                result += arrayOfWords[g][arrayOfWords[g].length - 1]
            } else if(i === arrayOfWords[g].length - 1){
                result += arrayOfWords[g][1]
            } else{
                result += arrayOfWords[g][i]
            }
        }
        if(g !== arrayOfWords.length - 1){
          result += " "
        }
        
    }

    console.log(result)
    return result

  }

  encryptThis("hello world")
  encryptThis("good")
