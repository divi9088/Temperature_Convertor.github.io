let celciusInput = document.querySelector('#celcius > input')
let FarenheitInput = document.querySelector('#Farenheit > input')
let KelvinInput = document.querySelector('#Kelvin > input')

let btn = document.querySelector('.button button')


function roundNumber(number){
    return Math.round(number*100)/100
}


/* Celcius to Farenheit and Kelvin */
celciusInput.addEventListener('input', function(){
    let cTemp = parseFloat(celciusInput.value)
    let fTemp = (cTemp*(9/5)) + 32
    let kTemp = cTemp + 273.15

    FarenheitInput.value = roundNumber(fTemp)
    KelvinInput.value = roundNumber(kTemp)
})


/* Farenheit to Celcius and Kelvin */
FarenheitInput.addEventListener('input', function(){
    let fTemp = parseFloat(FarenheitInput.value)
    let cTemp = (fTemp - 32) * (5/9)
    let kTemp = (fTemp -32) * (5/9) + 273.15

    celciusInput.value = roundNumber(cTemp)
    KelvinInput.value = roundNumber(kTemp)
})

/* Kelvin to Celcius and Farenheit */
KelvinInput.addEventListener('input', function(){
    let kTemp = parseFloat(KelvinInput.value)
    let cTemp = kTemp - 273.15
    let fTemp = (kTemp - 273.15) * (9/5) + 32

    celciusInput.value = roundNumber(cTemp)
    FarenheitInput.value = roundNumber(fTemp)
})


btn.addEventListener('click', ()=>{
    celciusInput.value = ""
    FarenheitInput.value = ""
    KelvinInput.value = ""
})