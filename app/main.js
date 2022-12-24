let livros = [];
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBuscarLivrosDaAPI();
const elementoParaInserirLivros = document.getElementById('livros');

async function getBuscarLivrosDaAPI(){
    const res = await fetch(endpointDaAPI);
    livros = await res.json();
    console.table(livros);
    exibirLivrosNaTela(livros);
}

function exibirLivrosNaTela(listaDeLivros){
    listaDeLivros.forEach(e => {
        elementoParaInserirLivros.innerHTML += 
        `
        <div class="livro">
        <img class="livro__imagens" src="${e.imagem}" alt="${e.alt}" />
        <h2 class="livro__titulo">
          ${e.titulo}
        </h2>
        <p class="livro__descricao">${e.autor}</p>
        <p class="livro__preco" id="preco">R$${e.preco}</p>
        <div class="tags">
          <span class="tag">${e.categoria}</span>
        </div>
      </div>
      `
    });
}