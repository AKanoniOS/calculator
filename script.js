let display = document.querySelector('.display')
let firstNum = 0
let secondNum = 0
let selectedOperator = ''
let resetSwitch = false
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

function clearFunc(){
    display.textContent = 0
    firstNum = 0
    secondNum = 0
    selectedOperator = ''
    firstNumDisplayTest.textContent = firstNum
    secondNumDisplayTest.textContent = secondNum
    selectedOperatorDisplayTest.textContent = selectedOperator
}

function resetDisplay() {
    display.textContent = 0
    resetSwitch = false
}

let numbers = document.querySelectorAll('.num')

numbers.forEach(item => {
    item.addEventListener('click', () => {
        if (resetSwitch) {
            if (selectedOperator.length > 1) {
                resetDisplay()
            }
        }
        updateDisplay(item.textContent)
    })
})


let clear = document.querySelector('.clear')

clear.addEventListener('click', () => {
    clearFunc('')
})

function loadFirstNum() {
    firstNum = display.textContent
    firstNumDisplayTest.textContent = `${firstNum}`
    
}

function addFunc(){
    loadFirstNum()
    selectedOperator = 'add'
    resetSwitch = true
    selectedOperatorDisplayTest.textContent = `add`
}
function subtractFunc(){
    loadFirstNum()
    selectedOperator = 'subtract'
    resetSwitch = true
    selectedOperatorDisplayTest.textContent = `subtract`
}
function multiplyFunc(){
    loadFirstNum()
    selectedOperator = 'multiply'
    resetSwitch = true
    selectedOperatorDisplayTest.textContent = `multiply`
}
function divideFunc(){
    loadFirstNum()
    selectedOperator = 'divide'
    resetSwitch = true
    selectedOperatorDisplayTest.textContent = `divide`
}

add.addEventListener('click', addFunc)
subtract.addEventListener('click', subtractFunc)
multiply.addEventListener('click', multiplyFunc)
divide.addEventListener('click', divideFunc)

function total(a,b) {
    if (selectedOperator == 'add') {
        return +a + +b
    } else if (selectedOperator == 'subtract') {
        return +a - +b
    } else if (selectedOperator == 'multiply') {
        return +a * +b
    } else if (selectedOperator == 'divide') {
        return +a / +b
    }
}

function loadSecondNum() {
    secondNum = display.textContent
    secondNumDisplayTest.textContent = `${secondNum}`
    newNum = total(firstNum,secondNum)
    display.textContent = newNum
}

let equals = document.querySelector(".equals")

equals.addEventListener('click', loadSecondNum)