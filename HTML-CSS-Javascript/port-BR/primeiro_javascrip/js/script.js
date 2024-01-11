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

let titulo = document.getElementById("titulo")
titulo.innerText = "Titulo da página adicionado com JavaScript"

let link = document.querySelector("a")
link.innerText = "Link adicionado com JavaScript"

let listNaoOrdenada = document.querySelector("ul")
listNaoOrdenada.innerHTML = `
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
`

let listOrdenada = document.getElementById('lista-ordenada')
listOrdenada.innerHTML = `
    <li><a href="https://prozeducacao.com.br">Link</a></li>
        <li><a href="https://prozeducacao.com.br">Link</a></li>
        <li><a href="https://prozeducacao.com.br">Link</a></li>
`