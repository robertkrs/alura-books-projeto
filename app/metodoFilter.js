const botoes = document.querySelectorAll('.btn');
botoes.forEach(e => e.addEventListener('click', filtrarLivrosDeFront));

function filtrarLivrosDeFront(){
    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.value;
    let livrosFiltrados = livros.filter(livro => livro.categoria == categoria);
    exibirLivrosNaTela(livrosFiltrados);
}