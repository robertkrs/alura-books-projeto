const botoes = document.querySelectorAll('.btn');

let btnLivrosDisponiveis = document.getElementById('btnLivrosDisponiveis');

botoes.forEach(e => e.addEventListener('click', filtrarLivrosDeFront));
function filtrarLivrosDeFront(){
    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value;
    let livrosFiltrados = categoria == 'disponivel' ? livros.filter(e => e.quantidade > 0) : livros.filter(e => e.categoria == categoria);
    exibirLivrosNaTela(livrosFiltrados);
    if(categoria == 'disponivel'){
        exibirValorTotal();
    }
}

function exibirValorTotal(){
    elementoValorTotalLivros.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">299,00</span></p>
    </div>
    `
}

/*btnLivrosDisponiveis.addEventListener('click', livrosDisponiveis);

function livrosDisponiveis(){
  let disponivel = livros.filter(e => e.quantidade > 0);
  exibirLivrosNaTela(disponivel);
}*/