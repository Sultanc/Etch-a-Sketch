const gridContainer = document.querySelector('.grid-container')
const gridSize = document.querySelector('#drop-down-value')
document.querySelector('.create').addEventListener('click',changeGridSize)
createGrid()

//Create grid
function createGrid(){
    const grid = gridSize.value** 2
    for (var i = 0; i < grid; i++){
        const squareDiv = document.createElement('div')
        let squareHeightAndWidth = 600/Number(gridSize.value)
        squareDiv.style.height = squareHeightAndWidth + 'px'
        squareDiv.style.width = squareHeightAndWidth + 'px'
        squareDiv.classList.add('square')
        gridContainer.appendChild(squareDiv)
        console.log(gridSize.value + ' ' + squareHeightAndWidth + ' ' + grid)
    }
    //Random colors + fade to black + clearpad   
    const squareToArray = Array.prototype.slice.apply(document.querySelectorAll('.square'))
    squareToArray.forEach((square) => {
        square.addEventListener("mouseover",function(e){ 
            document.querySelector('.clear').addEventListener('click',clearPad)
            e.target.style.backgroundColor = false
                let r = Math.floor(Math.random()*255)
                let g = Math.floor(Math.random()*255)
                let b = Math.floor(Math.random()*255)
                baseColor = 'rgb(' + r + ', ' + g + ', ' + b + ')'
            
            if (Boolean(e.target.style.backgroundColor) == false){
                e.target.style.backgroundColor = baseColor
                return true
            }
            else 
            e.target.style.backgroundColor = fadeToBlack(e)
            // clearpad
            function clearPad(){
                square.style.backgroundColor = ''
            }
            //Extract RGB value from mouse event
            function fadeToBlack(e) {
                let extractRgb = e.target.style.backgroundColor.match(/\d+/g)
                let r2 = Number(extractRgb[0])-27
                let g2 = Number(extractRgb[1])-27
                let b2 = Number(extractRgb[2])-27
                return 'rgb(' + r2 + ', ' + g2 + ', ' + b2 + ')'
            }
        })
    })
}

// create button
function changeGridSize(){
    let squareToRemove = Array.prototype.slice.apply(document.querySelectorAll('.square'))
    squareToRemove.forEach((square) => {gridContainer.removeChild(square)})
    createGrid()
}