var passphrase = document.getElementById("passphrase")

function getRandomInt() {
  return Math.floor(Math.random() * Math.floor(274937));
}

var anArrayOfEnglishWords = require("an-array-of-english-words")
console.log(words.filter(d => /fun/.test(d)))
const addWords = (words, phrase) => {
    for (var i = 0; i < words; i++) {
        word = anArrayOfEnglishWords[getRandomInt()]
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
