function generateGrid() {
    for (let i=0; i<256; i++) {
        const square = document.createElement('div')
        square.classList.add('square')
        const container = document.querySelector(".container")
        container.appendChild(square)
    }
}
generateGrid()
const squares = document.querySelectorAll('.square')
squares.forEach((square) => {
    square.addEventListener('mouseover', (e) => {
        e.target.classList.add('filled')
    })
})
const button = document.querySelector('button')
button.addEventListener('click', function (e) {
    const container = document.querySelector(".container")
    let dimension = prompt('How many squares in a row would you like?')
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
    let WidthPerSide = 512/dimension
    const container2 = document.createElement('div')
    container2.classList.add('container')
    for (let i=0; i<(dimension*dimension); i++) {
        const filler = document.createElement('div')
        filler.style.width = WidthPerSide + 'px'
        filler.style.height = WidthPerSide + 'px'
        filler.classList.add('filler')
        container.appendChild(filler)
    }
    const fillers = document.querySelectorAll('.filler')
    fillers.forEach((filler) => {
        filler.addEventListener('mouseover', (e) => {
            e.target.classList.add('filled')
        })

    })

})