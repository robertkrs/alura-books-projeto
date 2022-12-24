function aplicarDesconto(livros){
    const desconto = 0.3;
    livrosComDesconto = livros.map(e => {
        return {...e, preco: e.preco - (e.preco * desconto)}
    })
    return livrosComDesconto;
}