const produtos = [
    { nome: "Note 8 pro", preco: 1460 },
    { nome: "Galaxy S8 Plus", preco: 2000 },
    { nome: "LG G7 thinQ", preco: 2300 },
    { nome: "Motorola One Zoom", preco: 1800 },
    { nome: "iPhone 7 Plus", preco: 3000 },
    { nome: "Huawei P20 Lite", preco: 2500 },
    { nome: "Galaxy M30", preco: 1500 },
    { nome: "Asus ZenFone 5Z", preco: 1400 },
    { nome: "Xiaomi redmi note 8", preco: 1600 },
    { nome: "Multilaser H", preco: 1200 },
]

const ApenasPreco = produtos.map((produto)=>{
    return produto.preco
});

console.log(ApenasPreco);