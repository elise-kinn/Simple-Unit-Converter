const input = document.querySelector("#left input"); //input L
const results = document.querySelector("#right input"); //input R
const selector = document.querySelector("#units"); //selector L
const selectorResults = document.querySelector("#units-right"); //selector R

const cToF = (input) => {return (input * 9/5) + 32}

const fToC = (input) => {return (input - 32) * 5/9}

const fToK = (input) => {return (input - 32) * 5/9 + 273.15}

const cToK = (input) => {return input + 273.15}

const kToC = (input) => {return input - 273.15}

const kToF = (input) => {return (input - 273.15) * 9/5 + 32}

const converterTemperature = () => {
    const selectorValue = selector.value; //récup value selector L
    const selectorResultsValue = selectorResults.value; //récup value selector R
    inputValue = input.value; // récup value input L
    
    if(selectorValue === "Celsius" && selectorResultsValue === "Fahrenheit"){ // C F
        const res = cToF(inputValue)
        results.value = `${res}`
    }

    if(selectorValue === "Fahrenheit" && selectorResultsValue === "Celsius"){ // F C
        const res = fToC(inputValue)
        results.value = `${res}`
    }

    if(selectorValue === "Fahrenheit" && selectorResultsValue === "Kelvin"){ // F K
        const res = fToK(inputValue)
        results.value = `${res}`
    }

    if(selectorValue === "Celsius" && selectorResultsValue === "Kelvin"){ // C K
        const res = cToK(inputValue)
        results.value = `${res}`
    }

    if(selectorValue === "Kelvin" && selectorResultsValue === "Celsuis"){ // K C
        const res = kToC(inputValue)
        results.value = `${res}`
    }

    if(selectorValue === "Kelvin" && selectorResultsValue === "Fahrenheit"){ // K F
        const res = kToF(inputValue)
        results.value = `${res}`
    }

    if(selectorValue === selectorResultsValue){
        results.value = inputValue
    }
}

selector.addEventListener('input', () => { //event lorsque la value du selecteur est modifiée
    converterTemperature()
})

selectorResults.addEventListener('input', () => { //event lorsque la value du selecteur est modifiée
    converterTemperature()
})


input.converterTemperature('input', () => { //event lorsque la value de l'input est modifiée
    converter()
})

