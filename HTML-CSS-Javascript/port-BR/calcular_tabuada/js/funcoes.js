function calcularTabuada(){
    /* 
        Função simples para calcular a tabuada (todas as multiplicação de 0 até 10) de um número.
        O código possui a sua entrada/saida de dados atrelado a elementos da pagina HTML.
    */

    // Entreda
    // O valor de entrada é obtido diretamento do campo da página
    const numero = document.getElementById('numero').value
    var listaTabuada = []

    // Processamento
    // Calculo da lista de resultados das multiplicações
    for(let i = 0; i <= 10; i++){
        listaTabuada[i] = i * Number(numero)
    }

    // Saída
    // A saída de dados é feita diretamente para o elemento HTML através da modificação do valor innerHTML.
    // Note que o id dos elementos foi escolhido para ser o mesmo do elemento da multiplicação
    for (let i = 0; i < listaTabuada.length; i++) {
            document.getElementById(i).innerHTML = numero + "x" + i + " = " + listaTabuada[i]
    }}