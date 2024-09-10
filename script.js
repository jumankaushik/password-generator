const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

const generateBtn = document.getElementById("generate-btn")
const firstPassword = document.querySelector("#first .password-text")
const secondPassword = document.querySelector("#second .password-text")
const copyFirstBtn = document.getElementById("copy-first")
const copySecondBtn = document.getElementById("copy-second")

let passwordLength = 15


function generateCharacters(){
    let randomChar = Math.floor(Math.random()* characters.length)
    return characters[randomChar]
}

function generatePassword(){
    let randomPassword = ""
    for (let i=0; i<passwordLength; i++){
        randomPassword += generateCharacters()
    }
    return randomPassword
}



generateBtn.addEventListener("click", function(){
    const passwordOne = generatePassword()
    const passwordtwo = generatePassword()
    firstPassword.textContent = passwordOne
    secondPassword.textContent = passwordtwo

    copyFirstBtn.style.display = "inline-block"
    copySecondBtn.style.display = "inline-block"
})


// Function to copy text to clipboard using the Clipboard API
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Password copied to clipboard!')
    }).catch(err => {
        console.error('Failed to copy text: ', err)
    })
}

// Event listeners for copy buttons
copyFirstBtn.addEventListener("click", function() {
    if (firstPassword.textContent) {
        copyToClipboard(firstPassword.textContent)
    }
})

copySecondBtn.addEventListener("click", function() {
    if (secondPassword.textContent) {
        copyToClipboard(secondPassword.textContent)
    }
})