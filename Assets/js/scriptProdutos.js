const URLprodutos = "https://fhnljcqz.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%22produto%22%5D%7B%0A++Titulo%2C%0A++++Descricao%2C%0A++++++Imagem%2C%7D%0A";
const wrapperProdutos = document.querySelector("main.produtos");

async function fetchProdutos() {
    const result = await fetch(URLprodutos);
    
    const data = await result.json();
    return data.data;
}

function montarProduto(dataProduto) {
    const textButton = document.createElement("div");
    textButton.innerText = "Entre em contato";

    const buttonContato = document.createElement("a");
    buttonContato.setAttribute("href", "contato.html");
    buttonContato.classList.add("button");
    buttonContato.appendChild(textButton);

    const title = document.createElement("h2");
    title.innerText = dataProduto.title;

    const description = document.createElement("p");
    description.innerText = dataProduto.description;

    const contentText = document.createElement("div");
    contentText.classList.add("content-text");
    contentText.append(title, description, buttonContato);

    const img = document.createElement("img");
    img.setAttribute("src", dataProduto.img);

    const mainContent = document.createElement("div");
    mainContent.classList.add(["main-content",  "flex-content"]);
    mainContent.append(img, contentText);

    const section = document.createElement("sections");
    section.classList.add("sections");
    section.append(mainContent);

    return section;
}

async function main() {
    const produtos = await fetchProdutos();
    console.log(produtos);
    produtos.forEach(produto => {
        const elemento = montarProduto(produto);
        wrapperProdutos.append(elemento);
    });
}

window.onload = main;