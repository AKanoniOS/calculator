let display = document.querySelector('.display')

function updateDisplay(input){
    display.textContent = `${input}`
}

let gridItems = document.querySelectorAll('.grid-item')

gridItems.forEach(item => {
    item.addEventListener('click', () => {
        updateDisplay(item.textContent)
    })
})