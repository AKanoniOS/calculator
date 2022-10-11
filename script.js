let display = document.querySelector('.display')

function updateDisplay(input){
    display.textContent += input
}

function clearDisplay(input){
    display.textContent = ``
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

