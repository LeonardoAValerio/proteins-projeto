const URL =
  "https://fhnljcqz.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%22parceiro%22%5D%7B%0A++NmFoto%2C%0A++%22url%22%3A+Foto.asset-%3Eurl%0A%7D";

window.addEventListener("load", async function () {
  try {
    const wrapper = this.document.querySelector("#parceiros");

    const resp = await fetch(URL, {
      method: "GET",
    });

    const dados = await resp.json();
    console.log(dados);
    const h2 = document.createElement("h2");
    h2.innerText = "Parceiros";
    wrapper.append(h2);

    const div = document.createElement("div");
    div.classList.add("Parceiros");

    for (let i = 0; i < dados.result.length; i++) {
      const img = document.createElement("img");
      img.src = dados.result[i].url;
      img.alt = dados.result[i].NmFoto;

      div.append(img);
    }

    wrapper.append(div);
  } catch (error) {
    console.error("Erro ao buscar os dados:", error);
  }
});
