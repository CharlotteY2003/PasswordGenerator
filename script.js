import { anArrayOfEnglishWords } from './array.js'
import { anArrayOfSpanishWords } from './array_es.js'
import { anArrayOfFrenchWords } from './array_fr.js'

var passphrase = document.getElementById("passphrase")
var numWords = document.getElementById("numWords")
var languages = document.getElementById("languages")
var reload = document.getElementById("reload")

var specialChar = "ùûüÿ€’“”«çéèêëïîô»àâæáíñóú"

const getRandomInt = (language) => {
    if (language == "en") {
        return Math.floor(Math.random() * Math.floor(274937));
    }
    else if (language == "es") {
        return Math.floor(Math.random() * Math.floor(636598));
    }
    else if (language == "fr") {
        return Math.floor(Math.random() * Math.floor(336524));
    }
}

const containsSpecialChar = (word) => {
    for (var i = 0; i < word.length; i++) {
        for (var j = 0; j < specialChar.length; j++) {
            console.log("in i")
            if (word.charAt(i) == specialChar.charAt(j)) {
                console.log("in j")
                return true
            }
        }
    }
    return false
}

const addWordsEn = (words, phrase) => {
    for (var i = 0; i < words; i++) {
        var word = anArrayOfEnglishWords[getRandomInt("en")]
        phrase += word + " "
    }
    return phrase
}

const addWordsEs = (words, phrase) => {
    for (var i = 0; i < words; i++) {
        var word = anArrayOfSpanishWords[getRandomInt("es")]
        phrase += word + " "
    }
    return phrase
}

const addWordsFr = (words, phrase) => {
    for (var i = 0; i < words; i++) {
        var word = anArrayOfFrenchWords[getRandomInt("fr")]
        phrase += word + " "
    }
    return phrase
}

const update = () => {
    if (languages.value == "en") {
        passphrase.innerText = addWordsEn(numWords.value, "")
    }
    else if (languages.value == "fr") {
        passphrase.innerText = addWordsFr(numWords.value, "")
    }
    else if (languages.value == "es") {
        passphrase.innerText = addWordsEs(numWords.value, "")
    }
}

document.addEventListener("load", function(){
    passphrase.innerText = addWordsEn(5, "")
}); 

numWords.addEventListener("change", function(){
    update()
});

languages.addEventListener("change", function(){
    update()
});

reload.addEventListener("click", function(){
    update()
});

passphrase.addEventListener("click", function(){
  e.clipboardData.setData('text/plain', passphrase.innerText);
  alert("Copied!");
});
