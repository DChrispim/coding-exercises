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

// Código que modifica o titulo da página
let titulo = document.getElementById("titulo")
titulo.innerText = "Titulo da página adicionado com JavaScript"

// Código que modifica o link
let link = document.querySelector("a")
link.innerText = "Link adicionado com JavaScript"

// Código que modifica a lista não ordenada
let listNaoOrdenada = document.querySelector("ul")
listNaoOrdenada.innerHTML = `
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
`

// Código que modifica a lista ordenada
let listOrdenada = document.getElementById('lista-ordenada')
listOrdenada.innerHTML = `
    <li><a href="https://prozeducacao.com.br">Link</a></li>
        <li><a href="https://prozeducacao.com.br">Link</a></li>
        <li><a href="https://prozeducacao.com.br">Link</a></li>
`

// Código que cria um novo elemento
let itemVenda = document.createElement("div");

// Modificando o conteúdo HTML do elemento criado
itemVenda.innerHTML = 
`
<h3>Produto: Celular ABC</h3>
<p>Descrição: Celular bom à venda. Ótimas características!</p>
<figure>
    <img src="https://upload.wikimedia.org/wikipedia/commons/7/74/DynaTAC8000X.jpg" alt="Imagem do celular" width="100">
</figure>
`;

// Selecionando o elemento figura
let figureElement = itemVenda.querySelector("figure")

// Criando um elemento de caption para a figura e adicionando texto
let captionElement = document.createElement("figcaption")
captionElement.innerText = "Um celular muito moderno!"

// Adicionando o elemento caption na figura
figureElement.appendChild(captionElement)

// Adicionando todos os elementos criados
document.body.appendChild(itemVenda)