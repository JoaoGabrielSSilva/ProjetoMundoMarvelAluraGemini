

function pesquisar() {
  let secaoResultados = document.getElementById("resultados-pesquisa");
  // Seleciona o elemento HTML com o ID "resultados-pesquisa" onde os resultados serão exibidos.
  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  let resultados = "";
  let nome = "";
  let descricao = "";
  let tags = "";

  // Inicializa uma string vazia para armazenar o HTML dos resultados.

  if (!campoPesquisa){
    resultados += `
          <div class="item-resultado">
            <h2>Não foram encontrados resultados</h2>
          </div>
        `
    secaoResultados.innerHTML = resultados;
    return
  }

  campoPesquisa = campoPesquisa.toLowerCase()


  // Função para gerar e exibir os resultados da pesquisa.
  // Itera sobre cada item (dado) no array 'dados'.

  for (let dado of dados) {
    // Cada item representa um resultado da pesquisa.
    nome = dado.nome.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLowerCase()


    if(nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
      resultados += `
      <div class="item-resultado">
        <img class="imagem-esquerda" src="${dado.foto}" alt="">
        <div class="texto-resultado">
          <h2>
          <a href="${dado.link}" target="_blank">${dado.nome}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href="${dado.link}" target="_blank">Mais Informações</a>
        </div>
        
      </div>
    `;
    // Constrói o HTML para cada resultado, utilizando template literals para facilitar a leitura.
    // As propriedades do objeto 'dado' (nome, link, foto, descricao) são inseridas no HTML.
    }
  };

  if (!resultados){
    resultados = `
          <div class="item-resultado">
            <h2>Não foram encontrados resultados</h2>
          </div>
        `
  }

  secaoResultados.innerHTML = resultados;
  // Atribui o HTML gerado à propriedade 'innerHTML' do elemento 'secaoResultados',
  // substituindo o conteúdo anterior e exibindo os resultados na página.
}

