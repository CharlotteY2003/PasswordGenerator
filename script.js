var passphrase = document.getElementById("passphrase")

function getRandomInt() {
  return Math.floor(Math.random() * Math.floor(636598));
}

var anArrayOfEnglishWords = require("an-array-of-english-words")

const addWords = (words, phrase) => {
    for (var i = 0; i < words; i++) {
        word = anArrayOfSpanishWords[getRandomInt()]
        phrase += word + " "
    }
    return phrase
}
result = addWords(5, "")
// make function, input num words needed
console.log(result)

document.addEventListener("click", function(){
	passphrase.innerText = result
}); 
