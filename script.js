let square = document.querySelectorAll('.square')

const PLAYER1 = 'x'
const PLAYER2 = 'o'
let player1Turn = true;

function assignContent(arg){
    if(player1Turn){
        arg.textContent == PLAYER1
        player1Turn = false
    }
    else{
        arg.textContent == PLAYER2
        player1Turn = true
    }
}

let grid = [[],[],[]]

square.forEach(element => {
    switch(element.id){
        case '1':
        case '2':
        case '3':
            grid[0].push(element.textContent)
            break;
        case '4':
        case '5':
        case '6':
            grid[1].push(element.textContent)
            break;
        default:
            grid[2].push(element.textContent)
            break
    }
});

