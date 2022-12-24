function calcularValorTotal(e){
    return e.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2);
}