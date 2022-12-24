const elementoParaInserirLivros = document.getElementById('livros');
const elementoValorTotalLivros = document.getElementById('valor_total_livros_disponiveis');

function exibirLivrosNaTela(listaDeLivros){
  elementoParaInserirLivros.innerHTML = '';
    listaDeLivros.forEach(e => {
      //let disponibilidade = verificarDisponibilidade(e);
      let disponibilidade = e.quantidade > 0 ? 'livro_imagens' : 'livro_imagens indisponivel'
        elementoParaInserirLivros.innerHTML += 
        `
        <div class="livro">
        <img class="${disponibilidade}" src="${e.imagem}" alt="${e.alt}" />
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






    /*function verificarDisponibilidade(livro){
  if(livro.quantidade > 0){
    return 'livro_imagens';
  }else{
    return 'livros_imagens indisponivel';
  }
}*/