let display = document.querySelector('.display')
let firstNum = 0
let secondNum = 0
let firstNumDisplayTest = document.querySelector('.firstNum')
let secondNumDisplayTest = document.querySelector('.secondNum')
let selectedOperatorDisplayTest = document.querySelector('.selectedOperator')

let add = document.querySelector('.add')
let subtract = document.querySelector('.subtract')
let multiply = document.querySelector('.multiply')
let divide = document.querySelector('.divide')

display.textContent = firstNum

function updateDisplay(input){
    // remove leading zeros
    display.textContent += input
    if (Array.from(display.textContent)[0] == ('0' || 0)) {
        display.textContent = display.textContent.slice(1)
    }
}

function clearDisplay(input){
    display.textContent = 0
    firstNum = 0
    secondNum = 0
    selectedOperatorDisplayTest = ''
    firstNumDisplayTest.textContent = firstNum
    secondNumDisplayTest.textContent = secondNum
    selectedOperatorDisplayTest = selectedOperatorDisplayTest
}

let numbers = document.querySelectorAll('.num')

numbers.forEach(item => {
    item.addEventListener('click', () => {
        updateDisplay(item.textContent)
    })
})


let clear = document.querySelector('.clear')

clear.addEventListener('click', () => {
    clearDisplay('')
})

function loadFirstNum() {
    firstNum = display.textContent
    firstNumDisplayTest.textContent = `${firstNum}`
}

function addFunc(){
    loadFirstNum()
    selectedOperatorDisplayTest.textContent = `add`
}
function subtractFunc(){
    loadFirstNum()
    selectedOperatorDisplayTest.textContent = `subtract`
}
function multiplyFunc(){
    loadFirstNum()
    selectedOperatorDisplayTest.textContent = `multiply`
}
function divideFunc(){
    loadFirstNum()
    selectedOperatorDisplayTest.textContent = `divide`
}

add.addEventListener('click', addFunc)
subtract.addEventListener('click', subtractFunc)
multiply.addEventListener('click', multiplyFunc)
divide.addEventListener('click', divideFunc)