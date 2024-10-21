const URL = "";
const wrapperProdutos = document.querySelector("main.produtos");

const data = [
    {
        title: "Larvas Vivas",
        description: "As larvas de Tenébrio são servidas como alimento vivo e podem ser oferecidas como parte de uma dieta variada para pogonas, geckos, hedgehogs, tarântulas, peixes, escorpiões, pássaros, rãs e o utros animais de estimação exóticos. É uma ótima opção para pessoas que querem uma alternativa prática e nutritiva para alimentar seu Pet.",
        image: "https://api.unsplash.com/photos"
    }
]

async function fetchProdutos() {
    const result = await fetch(URL);
    return data;
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
    produtos.forEach(produto => {
        const elemento = montarProduto(produto);
        wrapperProdutos.append(elemento);
    });
}

window.onload = main;