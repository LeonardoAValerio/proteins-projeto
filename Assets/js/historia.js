const URLhistoria = "https://fhnljcqz.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%22paragrafo%22%5D&perspective=previewDrafts";

window.addEventListener("load", async function () {
  try {
    const wrapper = this.document.querySelector("#historia");

    const resp = await fetch(URLhistoria, {
      method: "GET",
    });

    const dados = await resp.json();

    const h2 = document.createElement("h2");

    const div = document.createElement("div");
    div.classList.add("content-text");

    const span = document.createElement("span");
    span.innerText = "Nossa";
    h2.appendChild(span);
    h2.append(" História");
    div.appendChild(h2);

    for (let i = 0; i < dados.result.length; i++) {
      const p = document.createElement("p");
      p.innerText = dados.result[(dados.result.length - 1) - i].paragrafo;
      div.append(p);
    }

    wrapper.append(div);
  } catch (error) {
    console.error("Erro ao buscar os dados:", error);
  }
});
