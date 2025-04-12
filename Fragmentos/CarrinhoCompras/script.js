let carregarProdutos = async () => {
  const response = await fetch('./produtos.json');
  const produtos = await response.json();

  const listaProdutos = document.querySelector(".lista-produtos");
  produtos.map(produto => {
    
    const produtoElement = document.createElement('div');
    produtoElement.classList.add("produtoCard")

    produtoElement.innerHTML = `
      <a href="${produto.url}" target="_blank">
        <img src="${produto.imagem}"/>
        <h3>${produto.descricao}</h3>
        <p>R$ ${produto.preco_venda}</p>
      </a>
      <button
        onClick="addCar([${produto.id}])"
      >Comprar</button>
    `;

    listaProdutos.appendChild(produtoElement);
  });
}

carregarProdutos();

function addCar(array) {
  console.log(array);
  
}
