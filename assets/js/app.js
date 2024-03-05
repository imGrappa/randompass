const getRandomLower = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

const getRandomUpper = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}
const getRandomNumber = () => {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

const getRandomSymbol = () => {
    const symbols = '!@#$%&*'
    return symbols[Math.floor(Math.random() * symbols.length)]
}

const randomFunctions = {getRandomLower, getRandomUpper, getRandomNumber, getRandomSymbol}

const generatePassword = () => {
    const length = 16
    let generatePassword = ''
    for (let i = 0; i < length; i++) 
        generatePassword += Object.values(randomFunctions)[Math.floor(Math.random() * Object.keys(randomFunctions).length)]()
    return generatePassword
}

const spanResult = document.getElementById('result')
const generateBtn = document.getElementById('generate')
const clipboardBtn = document.getElementById('clipboard')

generateBtn.addEventListener('click', () => {
    spanResult.innerHTML = generatePassword()
})

clipboardBtn.addEventListener('click', () => {
    const password = spanResult.innerText
    if(!password)
        return

    const textarea = document.createElement('textarea')
    textarea.value = password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
    alert(`Parola Kopyalandı: ${textarea.value}`)
})