// Definições das váriaveis
var tabuleiro;
var board;
var aviso;
var aviso2;
var jogador;

// Função que cria as o string da caixa de input
function msgInnerHTML(id,value){
    return `<td><input id='${id}' type='text' onblur="clearTextField('${id}')" onkeydown="marcar(event)"></td>`} 

// Função que cria as o string da mensagem do jogar
function msgJogador(jogador){
    if(jogador == 1){
        return `Vez do jogador 1. Insira um X na sua jogada`
    }else if(jogador == 2){
        return `Vez do jogador 2. Insira um O na sua jogada`
    }
}

// Função que cria as o string da mensagem do jogar vencedor
function msgJogadorVencedor(jogador){
    if(jogador == 1){
        return `O jogador 1 venceu!`
    }else if(jogador == 2){
        return `O jogador 2 venceu!`
    }
} 

// Função inicial
function iniciar(){

    // Define os elementos a serem usados
    board = document.getElementById("board");
    aviso = document.getElementById("aviso");
    aviso2 = document.getElementById("aviso2");

    // Define a vez do jogador e modifica a mensagem inicial
    jogador = 1;

    aviso.innerHTML=msgJogador(jogador)

    // Cria o array tabuleiro
    tabuleiro = new Array(3);

    // Cria 1 array em cada posição com 3 elementos
    for(let i=0; i < 3; i++){
        tabuleiro[i] = new Array(3)
    };

    // Preenche o array (3x3) com zeros
    for(let i=0; i<3; i++){
        for(j=0; j<3; j++){
            tabuleiro[i][j]=0;
        }
    };
    
    exibe();
}

// Função que cria/atualiza o HTML do tabuleiro
function exibe(){
    
    // Loop que verifica qual caixa deve ser criada baseado na tabela tabuleiro
    HTML = "<table>"
    for(let i=0; i<3; i++){
        HTML += "<tr>"
        for(j=0; j<3; j++){
            idNumber = String(i)+String(j)
            if(tabuleiro[i][j]==0){
                HTML += msgInnerHTML(idNumber,"")
            }else if(tabuleiro[i][j]==1){
                HTML += msgInnerHTML(idNumber,"X");
            } else{
                HTML += msgInnerHTML(idNumber,"O");
            }
        }
        HTML += "</tr>"
    }
    HTML += "</table><br>"

    board.innerHTML = HTML
}

// Função que marca o tabuleiro baseado no matrix 3x3 tabuleiro
function jogar(){
    aviso.innerHTML=msgJogador((jogador)%2 + 1)
    for(i=0; i<3; i++){
        for(j=0; j<3; j++){
            idNumber = `${i}${j}`
            cell = document.getElementById(idNumber)
            // console.log(`$Jogador:${jogador}`)
            switch (cell.value) {
                case "X":
                    tabuleiro[i][j]=1;
                    cell.setAttribute("disabled", "true");
                    continue;
                case "O":
                    tabuleiro[i][j]=-1;
                    cell.setAttribute("disabled", "true");
                    continue;
            }
        }
    }
    jogador++
    jogador = (jogador)%2
    //console.table(tabuleiro)
}

function verificarJogada(){
    let playCounter = 0
    let numberX = 0
    let numberO = 0

    for(i=0; i<3; i++){
        for(j=0; j<3; j++){
            idNumber = String(i) + String(j)
            cell = document.getElementById(idNumber)
            if(cell.getAttribute("disabled") == "true"){
                continue
            } else if(cell.value == "X" || cell.value == "O"){
                playCounter++
                if(cell.value == "X"){
                    numberX++
                }else if(cell.value == "O"){
                    numberO++
                }
            }
        }
    }
    // console.log("----------------------------")
    // console.log(`Jogardo:${jogador}`)
    // console.log(`playCounter:${playCounter}`)
    // console.log(`numberX:${numberX}`)
    // console.log(`numberO:${numberO}`)
    // console.log("----------------------------")
    if(playCounter == 0){
        aviso2.innerHTML="Por favor faça uma jogada"
    }else if(playCounter > 1){
        aviso2.innerHTML="Por favor faça somente uma jogada"
    }else if(numberO >= 1 && jogador == 1){
        aviso2.innerHTML="É a vez do jogar 1! Insira um X"
    }else if(numberX >= 1 && jogador == 2){
        aviso2.innerHTML="É a vez do jogar 2! Insira um O"
    } else{
        jogar()
        verificarVencedor()
    }
}

// Function to clear the text field
function clearTextField(val) {
    // Get the input element by its ID
    var textField = document.getElementById(val);
    if(textField.value == "X" || textField.value == "O"){
        
    }else{
        textField.value = ""
    }
  }

  function marcar(event) {
    // Check if the pressed key is "Enter" (key code 13)
    if (event.keyCode === 13) {
      // Call your desired function here
      verificarJogada();
    }
  }

function verificarVencedor(){
    let soma
    // Verificar linha
    for(i=0; i<3; i++){
        soma = 0
        soma = tabuleiro[i][0] + tabuleiro[i][1] + tabuleiro[i][2]

        if(soma == 3 || soma == -3){
            aviso.innerHTML=msgJogadorVencedor((jogador)%2 + 1)
            travarTabuleiro()
        }
    }

    // Verificar coluna
    for(i=0; i<3; i++){
        soma = 0
        soma = tabuleiro[0][i] + tabuleiro[1][i] + tabuleiro[2][i]

        if(soma == 3 || soma == -3){
            aviso.innerHTML=msgJogadorVencedor((jogador)%2 + 1)
            travarTabuleiro()
        }
    }

    // Verificar diagonal principal
    soma = 0
    soma = tabuleiro[0][0] + tabuleiro[1][1] + tabuleiro[2][2]

    if(soma == 3 || soma == -3){
        aviso.innerHTML=msgJogadorVencedor((jogador)%2 + 1)
        travarTabuleiro()
    }

    // Verificar diagonal secundária
    soma = 0
    soma = tabuleiro[0][2] + tabuleiro[1][1] + tabuleiro[2][0]

    if(soma == 3 || soma == -3){
        aviso.innerHTML=msgJogadorVencedor((jogador)%2 + 1)
        travarTabuleiro()
    }
}

function travarTabuleiro(){
    for(i=0; i<3; i++){
        for(j=0; j<3; j++){
            idNumber = String(i) + String(j)
            cell = document.getElementById(idNumber)
            cell.setAttribute("disabled", "true")
        }
    }
    // console.table(tabuleiro)
}