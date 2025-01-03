const URLprodutos = "https://fhnljcqz.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27produto%27%5D+%7B%0A++produto%2C%0A++++Descricao%2C%0A++%27imgProduto%27%3A+Imagem.asset-%3Eurl%0A%7D";
const wrapperProdutos = document.querySelector("main.produtos");

async function fetchProdutos() {
    const result = await fetch(URLprodutos, {method: "GET"});
    const data = await result.json();
    return data.result;
}

function montarProduto(dataProduto) {
    const textButton = document.createElement("div");
    textButton.innerText = "Entre em contato";

    const buttonContato = document.createElement("a");
    buttonContato.setAttribute("href", "contato.html");
    buttonContato.classList.add("button");
    buttonContato.appendChild(textButton);

    const title = document.createElement("h2");
    title.innerText = dataProduto.produto;

    const description = document.createElement("p");
    description.innerText = dataProduto.Descricao;

    const contentText = document.createElement("div");
    contentText.classList.add("content-text");
    contentText.append(title, description, buttonContato);

    const img = document.createElement("img");
    img.setAttribute("src", dataProduto.imgProduto);

    const mainContent = document.createElement("div");
    mainContent.classList.add("main-content");
    mainContent.classList.add("flex-content");
    mainContent.append(img, contentText);

    const section = document.createElement("sections");
    section.classList.add("sections");
    section.id = dataProduto.produto;
    section.append(mainContent);

    return section;
}

async function main() {
    const produtos = await fetchProdutos();
    produtos.forEach(produto => {
        const elemento = montarProduto(produto);
        wrapperProdutos.append(elemento);
    });
}

window.addEventListener("load", async () => {
    await main();
    if(window.location.hash) window.location.href = window.location.hash;
});