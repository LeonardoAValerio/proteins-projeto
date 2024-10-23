const URL =
  "https://fhnljcqz.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%22InformacoesDaEmpresa%22%5D%7B%0A++++redesSocial%2C%0A++++Direitos%2C%0A++++Contatos%2C%0A++++Localizacao%2C%0A++++linksMaps%0A%7D";

window.addEventListener("load", async function () {
  try {
    const resp = await fetch(URL, { method: "GET" });
    const dados = await resp.json();

    console.log(dados);

    if (dados.result && dados.result.length > 0) {
      const informacoes = dados.result[0];

      const setContent = (selector, content) => {
        const element = document.querySelector(selector);
        if (element && content) {
          element.textContent = content;
        }
      };

      setContent("#localizacao p", informacoes.Localizacao);
      setContent("#contatos p", informacoes.Contatos);
      setContent("#direitos p", informacoes.Direitos);

      if (informacoes.linksMaps) {
        document.querySelector("#google-maps").src = informacoes.linksMaps;
      }
      if (informacoes.redesSocial) {
        document.querySelector("#redes-sociais").href = informacoes.redesSocial;
      }
    } else {
      console.error("Nenhum dado retornado pela API.");
    }

  } catch (error) {
    console.error("Erro ao buscar os dados:", error);
  }
});