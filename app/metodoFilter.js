const botoes = document.querySelectorAll('.btn');

let btnLivrosDisponiveis = document.getElementById('btnLivrosDisponiveis');

botoes.forEach(e => e.addEventListener('click', filtrarLivrosDeFront));
function filtrarLivrosDeFront(){
    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value;
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponivel() : filtrarPorCategoria(categoria);
    exibirLivrosNaTela(livrosFiltrados);
    if(categoria == 'disponivel'){
        const valorTotal = calcularValorTotal(livrosFiltrados);
        exibirValorTotal(valorTotal);
    }
}

function filtrarPorCategoria(categoria) {
    return livros.filter(e => e.categoria == categoria);
}

function filtrarPorDisponivel() {
    return livros.filter(e => e.quantidade > 0);
}

function exibirValorTotal(valorTotal){
    elementoValorTotalLivros.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `
}

/*btnLivrosDisponiveis.addEventListener('click', livrosDisponiveis);

function livrosDisponiveis(){
  let disponivel = livros.filter(e => e.quantidade > 0);
  exibirLivrosNaTela(disponivel);
}*/