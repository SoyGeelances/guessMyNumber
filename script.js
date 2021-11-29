
//VARIABLES GENERALES
let puntajeHighScore = Number(document.querySelector('span.valueHighscoreClass').textContent);
let valorScore = Number(document.querySelector('span.valueScoreClass').textContent);


// GENERAR EL NUMERO SECRETO
function getRandomNumberBetween(){
    guessNumberClass = Math.floor(Math.random()*(20-1+1)+1);
    return guessNumberClass;
}
getRandomNumberBetween();


//FUNCIONALIDAD SCORE 

function CalScore() {
    valorScore = valorScore - 1;

    if (valorScore > -1) {
        return document.querySelector('span.valueScoreClass').textContent = valorScore;
    } else {
        document.querySelector('.mensajeConsola').textContent = 'PERDISTE EL JUEGO';
        document.querySelector('#gameTable').style.backgroundColor = '#d03c3c';
    }
    
}

//ACCIONES DEL BOTON CHECK
document.querySelector('#buttCheck').addEventListener('click', function() {
    let putValue = document.querySelector('#putNumberID').value;

    if (!putValue) {
        alert("Coloca un valor");

    } else if (putValue > guessNumberClass) {
        document.querySelector('.mensajeConsola').textContent = 'Too High!!';
        CalScore();

    } else if (putValue < guessNumberClass) {
        document.querySelector('.mensajeConsola').textContent = 'Too Low!!';
        CalScore();

    } else if (putValue == guessNumberClass){
        document.querySelector('.guessNumberClass').textContent = guessNumberClass;        
        document.querySelector('.mensajeConsola').textContent = 'YOU WIIINNN!';
        document.querySelector('#gameTable').style.backgroundColor = '#5ec25e';
        FunctHighS();
    }
    
});

//FUNCION HIGSCORE

function FunctHighS() {

    if (valorScore >= puntajeHighScore ) {
        document.querySelector('span.valueHighscoreClass').textContent = valorScore;
        puntajeHighScore = valorScore;
    } 
}

//FUNCION BOTON AGAIN

document.querySelector('#buttAgain').addEventListener('click', function() {
    document.querySelector('.guessNumberClass').textContent = '?';
    getRandomNumberBetween();
    valorScore = 20;
    document.querySelector('.mensajeConsola').textContent = 'Start the Game!';
    document.querySelector('#putNumberID').value = 0;
    document.querySelector('#gameTable').style.backgroundColor = '#a9a9a9';
    document.querySelector('span.valueScoreClass').textContent = valorScore;    
    
});



