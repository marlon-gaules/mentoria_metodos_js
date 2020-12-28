const produtos = [
    { nome: "Note 8 pro", preco: 1460 },
    { nome: "Galaxy S8 Plus", preco: 2000 },
    { nome: "LG G7 thinQ", preco: 2300 },
    { nome: "Motorola One Zoom", preco: 1800 },
    { nome: "iPhone 7 Plus", preco: 3000 },
]

const ApenasPreco = produtos.find((produto)=>{
    return produto.preco === 1460
});

console.log(ApenasPreco);