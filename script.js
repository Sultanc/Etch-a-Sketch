const gridContainer = document.querySelector('.grid-container')
const gridSize = document.querySelector('#drop-down')
const apply = document.querySelector('.apply').addEventListener('click',changeGridSize)

function changeGridSize() {
    window.location.reload()
}

//Create grid
function createGrid(){
    const grid = gridSize.value** 2
    for (var i = 0; i < grid; i++){
        const squareDiv = document.createElement('div')
        squareDiv.classList.add('square')
        gridContainer.appendChild(squareDiv)
        const squareHeightAndWidth = 600/Number(gridSize.value)
        squareDiv.style.height = squareHeightAndWidth + 'px'
        squareDiv.style.width = squareHeightAndWidth + 'px'
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
        
        //Extract RGB value from mouse event
        function fadeToBlack() {
            let extractRgb = e.target.style.backgroundColor.match(/\d+/g)
            let r2 = Number(extractRgb[0])-25
            let g2 = Number(extractRgb[1])-25
            let b2 = Number(extractRgb[2])-25
            return 'rgb(' + r2 + ', ' + g2 + ', ' + b2 + ')'
        }

        if (Boolean(e.target.style.backgroundColor) == false){
            e.target.style.backgroundColor = baseColor
            return true
        }
        else 
            e.target.style.backgroundColor = fadeToBlack()
            
        function clearPad(){
            square.style.backgroundColor = ''
        }
    })
})
}

createGrid();