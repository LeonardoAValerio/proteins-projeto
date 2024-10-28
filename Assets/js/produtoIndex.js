const URLproducts = "https://fhnljcqz.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27produto%27%5D+%7B%0A++produto%2C%0A++++Descricao%2C%0A++%27imgProduto%27%3A+Imagem.asset-%3Eurl%0A%7D";
const wrapperProducts = document.querySelector("div.all-products");

async function fetchProducts() {
    const result = await fetch(URLproducts, {method: "GET"});
    const data = await result.json();
    return data.result;
}

function constructDescription(description = "") {
    const LIMIT_WORDS = 10;
    const descriptionSplited = description.split(" ");
    const descriptionCreated = [];
    for(let i = 0; i < descriptionSplited.length; i++) {
        if(i === (LIMIT_WORDS-1)) break;
        const word = descriptionSplited[i];
        descriptionCreated.push(word);
    }
    descriptionCreated.push("...");
    return descriptionCreated.join(" ");
}

function constructCardProduct(dataProduct) {
    const img = document.createElement("img");
    img.setAttribute("src", dataProduct.imgProduto);

    const title = document.createElement("h3");
    title.innerText = dataProduct.produto;

    const description = document.createElement("p");
    description.innerText = constructDescription(dataProduct.Descricao);

    const readMore = document.createElement("p");
    readMore.classList.add("saibaMais");
    readMore.innerText = "→ Ver produto";

    const cardProduct = document.createElement("a");
    cardProduct.setAttribute("href", "produtos.html#" + dataProduct.produto);
    cardProduct.classList.add("product");
    cardProduct.append(img, title, description, readMore);

    return cardProduct;
}

async function main() {
    const products = await fetchProducts();
    products.forEach(product => {
        const element = constructCardProduct(product);
        wrapperProducts.append(element);
    });
}

window.addEventListener("load", async () => {
    await main();
});