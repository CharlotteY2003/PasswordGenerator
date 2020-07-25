import { anArrayOfEnglishWords } from './array.js'

var passphrase = document.getElementById("passphrase")

function getRandomInt() {
  return Math.floor(Math.random() * Math.floor(274937));
}

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
