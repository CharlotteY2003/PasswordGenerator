import { anArrayOfEnglishWords } from './array.js'
import { anArrayOfSpanishWords } from './array_es.js'

var passphrase = document.getElementById("passphrase")
var numWords = document.getElementById("numWords")
var languages = document.getElementById("languages")

function getRandomInt(language) {
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

const addWordsEs = (words, phrase) => {
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
        passphrase.innerText = addWordsEn(numWords.value, "")
    }
    else if (languages.value == "es") {
        passphrase.innerText = addWordsEs(numWords.value, "")
    }
}

document.addEventListener("load", function(){
    passphrase.innerText = addWordsEn(5, "")
    console.log(passphrase.innerText)
}); 

numWords.addEventListener("change", function(){
    update()
});

languages.addEventListener("change", function(){
    update()
    console.log(passphrase.innerText)
    console.log(numWords.value)
});
