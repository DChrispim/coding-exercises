// Função criada usando o método usual
function mensagemSucesso1 () {
    console.log("Conexão feita com sucesso!")
}

// Função criada usando o método anônima
const mensagemSucesso2 = function () {console.log("Conexão feita com sucesso!")}

// Função criada usando o método arrow
const mensagemSucesso3 = () => console.log("Conexão feita com sucesso!")

// Chamando as funções
mensagemSucesso1()
mensagemSucesso2()
mensagemSucesso3()