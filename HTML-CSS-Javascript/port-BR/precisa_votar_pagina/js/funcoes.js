/* 
Definições das funções em JavaScript
    calcularIdade: Função que retorna a idade da pessoa
    precisoParticipar: Função que retorna uma mensagem dizendo se a pessoa deve ir votar
    tabelaAnoEleicoes: Modifica a tabela com id tabelaEleicoes
    limparTabela: Limpa a tabela com id tabelaEleicoes
*/

// Lista de anos de eleições no Brasil entre 1989 e 2042, variavel global
const tabelaEleicoesBrasil = [1989, 1994, 1998, 2002, 2006, 2010, 2014, 2018, 2022, 2026, 2030, 2034, 2038, 2042]

function calcularIdade(anoNascimento, mesNascimento, anoAtual, mesAtual) {
    /* 
        Descrição: Função que retorna a idade da pessoa (int)
        Entrada:
            anoNascimento: int
            mesNascimento: int
            anoAtual: int
            mesAtual: int
        Saida:
            Idade: int
    */

    // Calcula a diferença entre o ano atual e o ano de nascimento
    let idade = anoAtual - anoNascimento;

    // Verifica se a pessoa já fez aniversário no ano
    if (mesAtual < mesNascimento) {
        idade--; // Subtrai 1 se a pessoa ainda não tiver feito aniversário no ano
    }
    
    // Retorna a idade da pessoa
    return idade;
}

function precisoParticipar(idadeNaEleicao) {
    /*      
        Descrição: Função que retorna uma mensagem dizendo se a pessoa deve ir votar
        Entradas:
            idadeNaEleicao: int
        Saida:
            mensagem: string
    */

    // Condicionais usando a idade
    if (idadeNaEleicao < 16) {                                  // Menor de 16 anos, não vota
        var mensagem = 'Você não tem idade minima para votar'
    } else if (idadeNaEleicao >= 16 && idadeNaEleicao < 18) {   // Maior/igual de 16 e menor que 18, voto facultativo
        var mensagem = 'Você pode votar ou não.'
    } else if (idadeNaEleicao >=18 && idadeNaEleicao < 65) {    // Maior/igual de 18 e menor que 65, voto obrigatório
        var mensagem = 'Você precisa votar.'
    } else {                                                    // Maior/igual de 65, voto facultativo
        var mensagem = 'Você pode votar ou não.'
    }

    // Retorna a mensagem selecionada
    return mensagem
}

function tabelaAnoEleicoes(anoNascimento, mesNascimento){
    /*
        Descrição: Modifica a tabela com id tabelaEleicoes
        Entradas:
            anoNascimento: int
            mesNascimento: int
        Saída:
            Modificação da tabela do HTML
    */

    // Iteração sob toda a lita tabelaEleicoesBrasil
    for (let i = 0; i < tabelaEleicoesBrasil.length; i++) {
        
        // Pega a referencia do corpo da tabela tabelaEleicoes
        var tableBody = document.getElementById("tabelaEleicoes").getElementsByTagName('tbody')[0];

        // Calcula a idade do usuario no ano de eleição
        var idadeNaEleicao = calcularIdade(anoNascimento, mesNascimento, tabelaEleicoesBrasil[i], 10)

        // Calcula a mensagem se o usuario precisa ou não participar da eleição
        var mensagemSobreParticipar = precisoParticipar(idadeNaEleicao)
        
        // Verifica a consistencia da idade do usuario
        if (idadeNaEleicao <= 0) {              // Verifica se o usuario era nascido na data da eleição
            continue                            // Pula o caso
        } else if (idadeNaEleicao > 150) {      // Verifica se o usuario colocou uma data possivel
                                                // (supondo que não existe pessoa com mais de 150 anos)
            alert("Não é possivel.")            // Alerta
            break                               // Sai do loop
        } else {
            
            
            var newRow = tableBody.insertRow();                       // Cria uma nova linha na tabela

            var celularAno = newRow.insertCell(0);                    // Insera uma nova celula pos 0 (celular Ano)
            var celulaIdade = newRow.insertCell(1);                   // Insera uma nova celula pos 2 (celular Idade)
            var celulaMensagem = newRow.insertCell(2);                // Insera uma nova celula pos 3 (celular Mensagem)

            celularAno.innerHTML = tabelaEleicoesBrasil[i];           // Aloca o valor celular pos 0 (celular Ano)
            celulaIdade.innerHTML = idadeNaEleicao;                   // Aloca o valor celular pos 2 (celular Idade)
            celulaMensagem.innerHTML = mensagemSobreParticipar;       // Aloca o valor celular pos 3 (celular Mensagem)
        }
    }
}

function limparTabela(){
    /*
        Descrição: Modifica a tabela com id tabelaEleicoes para remover todas as linhas.
        Saida:
            Modificação da tabela do HTML
    */

    // Pega a referencia do corpo da tabela tabelaEleicoes
    var tableBody = document.getElementById("tabelaEleicoes").getElementsByTagName('tbody')[0];
    
    // Iteração sob toda a lita tabelaEleicoesBrasil removendo as linhas
    while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.firstChild);
    }
}
