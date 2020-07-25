import { anArrayOfEnglishWords } from './array.js'

var passphrase = document.getElementById("passphrase")
var numWords = document.getElementById("numWords")

function getRandomInt() {
  return Math.floor(Math.random() * Math.floor(274937));
}

const addWords = (words, phrase) => {
    for (var i = 0; i < words; i++) {
        var word = anArrayOfEnglishWords[getRandomInt()]
        phrase += word + " "
    }
    return phrase
}
// make function, input num words needed


document.addEventListener("click", function(){
    passphrase.innerText = addWords(5, "")
    console.log(passphrase.innerText)
}); 

numWords.addEventListener("change", function(){
    passphrase.innerText = addWords(numWords.value, "")
    console.log(passphrase.innerText)
    console.log(numWords.value)
});
