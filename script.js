let square = document.querySelectorAll('.square')

const PLAYER1 = 'X'
const PLAYER2 = 'O'
let player1Turn = true
let grid = [[],[],[]];

play()

function assignContent(arg){
    if(!player1Turn){
        arg.textContent = PLAYER2
        player1Turn = true
        switch(arg.id){
            case '1':
            case '2':
            case '3':
                grid[0].splice(arg.id-1,1,PLAYER2)
                break;
            case '4':
            case '5':
            case '6':
                grid[1].splice(arg.id-4,1,PLAYER2)
                break;
            default:
                grid[2].splice(arg.id-7,1,PLAYER2)
                break;
        }
    }
    else{
        arg.textContent = PLAYER1
        player1Turn = false
        switch(arg.id){
            case '1':
            case '2':
            case '3':
                grid[0].splice(arg.id-1,1,PLAYER1)
                break;
            case '4':
            case '5':
            case '6':
                grid[1].splice(arg.id-4,1,PLAYER1)
                break;
            default:
                grid[2].splice(arg.id-7,1,PLAYER1)
                break;
        }
    }
}

function play(){
    square.forEach(element => {
        element.textContent = ''
        let numOfClicks = 0
        switch(element.id){
            case '1':
            case '2':
            case '3':
                grid[0].push(undefined)
                break;
            case '4':
            case '5':
            case '6':
                grid[1].push(undefined)
                break;
            default:
                grid[2].push(undefined)
                break;
        }
        element.addEventListener('click', (e) => {
            numOfClicks++;
            if(numOfClicks<=1&&(!player1Wins()&&!player2Wins())){
                assignContent(element)
            }
            if(player1Wins()){
                console.log('gano jugador 1')
            }
            else if(player2Wins()){
                console.log('gano jugador 2')
            }
        })
    })
}

function player1Wins(){
    return winsByRow(PLAYER1)||winsByDiagonal(PLAYER1)||winsByColumn(PLAYER1)
}

function player2Wins(){
    return winsByRow(PLAYER2)||winsByDiagonal(PLAYER2)||winsByColumn(PLAYER2)
}

function winsByRow(player){
    return grid.some((currentValue) => currentValue.every((value)=> value==player))
}

function winsByColumn(player){
    return grid[0][0]==player&&grid[1][0]==player&&grid[2][0]==player||grid[0][1]==player&&grid[1][1]==player&&grid[2][1]==player||grid[0][2]==player&&grid[1][2]==player&&grid[2][2]==player
}

function winsByDiagonal(player){
    return grid[0][0]==player&&grid[1][1]==player&&grid[2][2]==player||grid[0][2]==player&&grid[1][1]==player&&grid[2][0]==player
}

//para el reset voy a usar reload