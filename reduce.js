const produtos = [
    { nome: "LG G7 thinQ", preco: 2300 },
    { nome: "Motorola One Zoom", preco: 1800 },
    { nome: "iPhone 7 Plus", preco: 3000 },
]

const reduce = produtos.reduce((precoTotal, produto)=>{
    return produto.preco + precoTotal
}, 0)

console.log(reduce);