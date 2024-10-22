const URL = "";

window.addEventListener("load", async function () {
  try {
    const wrapper = this.document.querySelector("#historia");

    const resp = await fetch(URL, {
      method: "GET",
    });

    const dados = await resp.json();

    const h2 = document.createElement("h2");

    const span = document.createElement("span");
    span.innerText = "Nossa";
    h2.appendChild(span);
    h2.append(" História");
    wrapper.appendChild(h2);

    const div = document.createElement("div");
    div.classList.add("Parceiros");

    for (let i = 0; i < dados.result.length; i++) {
      const p = document.createElement("p");
      p.innerText = dados.result[i].paragrafo;
      div.append(p);
    }

    wrapper.append(div);
  } catch (error) {
    console.error("Erro ao buscar os dados:", error);
  }
});
