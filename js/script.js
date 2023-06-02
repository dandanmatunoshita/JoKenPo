var elementos = document.querySelectorAll('.player-options div > img')
var playerOpt = ""
var inimigoOpt = ""

function validarVitoria(){
    let vencedor = document.querySelector('.vencedor')
    if(playerOpt == "paper"){
        if(inimigoOpt == "paper"){
            //empate
            vencedor.innerHTML = "O jogo foi empatado"
        }else if(inimigoOpt == "scisor"){
            //inimigo ganhou
            vencedor.innerHTML = "O inimigo ganhou"
        }else if(inimigoOpt == "rock"){
            //player ganhou
            vencedor.innerHTML = "Player ganhou"
        }
    }else if(playerOpt == "scisor"){
        if(inimigoOpt == "scisor"){
            //empate
            vencedor.innerHTML = "O jogo foi empatado"
        }else if(inimigoOpt == "rock"){
            //inimigo ganhou
            vencedor.innerHTML = "O inimigo ganhou"
        }else if(inimigoOpt == "paper"){
            //player ganhou
            vencedor.innerHTML = "Player ganhou"
        }
    }else if(playerOpt == "rock"){
        if(inimigoOpt == "rock"){
            //empate
            vencedor.innerHTML = "O jogo foi empatado"
        }else if(inimigoOpt == "paper"){
            //inimigo ganhou
            vencedor.innerHTML = "O inimigo ganhou"
        }else if(inimigoOpt == "scisor"){
            //player ganhou
            vencedor.innerHTML = "Player ganhou"
        }
    }
}

function resetEnemy(){
    const enemyOptions = document.querySelectorAll(".enemy-options div")
    for (var i = 0; i < elementos.length; i++) {
        
        enemyOptions[i].childNodes[0].style.opacity = 0.3

    }
}


function inimigoJogar(){
    let rand = Math.floor(Math.random()*3)

    const enemyOptions = document.querySelectorAll(".enemy-options div")
    resetEnemy()
    for(var i = 0; i < enemyOptions.length; i++){
        
        if(i == rand){
            enemyOptions[i].childNodes[0].style.opacity = 1
            inimigoOpt = enemyOptions[i].childNodes[0].getAttribute('opt')
        }
    }


    validarVitoria()
 
}

function resetOpacityPlayer(){
    for (var i = 0; i < elementos.length; i++) {
        elementos[i].style.opacity = 0.3
    }
}


for (var i = 0; i < elementos.length; i++) {
    elementos[i].addEventListener('click', function (t) {
        resetOpacityPlayer()
        t.target.style.opacity = 1
        playerOpt = t.target.getAttribute('opt')

        inimigoJogar()

        // alert(playerOpt)
    })
}