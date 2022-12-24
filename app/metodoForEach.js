const elementoParaInserirLivros = document.getElementById('livros');

function exibirLivrosNaTela(listaDeLivros){
  elementoParaInserirLivros.innerHTML = '';
    listaDeLivros.forEach(e => {
        elementoParaInserirLivros.innerHTML += 
        `
        <div class="livro">
        <img class="livro__imagens" src="${e.imagem}" alt="${e.alt}" />
        <h2 class="livro__titulo">
          ${e.titulo}
        </h2>
        <p class="livro__descricao">${e.autor}</p>
        <p class="livro__preco" id="preco">R$${e.preco.toFixed(2)}</p>
        <div class="tags">
          <span class="tag">${e.categoria}</span>
        </div>
      </div>
      `
    });
}