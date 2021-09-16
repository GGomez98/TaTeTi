let square = document.querySelectorAll('.square')

const PLAYER1 = 'x'
const PLAYER2 = 'o'
let player1Turn = true;
let grid = [[],[],[]]

function assignContent(arg){
    if(player1Turn){
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
    else{
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
}

square.forEach(element => {
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
            numOfClicks+=1;
            if(numOfClicks<2){
                assignContent(element)
            } else{
                return false
            }
    })
});