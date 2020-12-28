const produtos = [
    { nome: "LG G7 thinQ", preco: 2300 },
    { nome: "Motorola One Zoom", preco: 1800 },
    { nome: "iPhone 7 Plus", preco: 3000 },
]

const ApenasPreco = produtos.some((produto)=>{
    return produto.preco > 1200
});

console.log(ApenasPreco);