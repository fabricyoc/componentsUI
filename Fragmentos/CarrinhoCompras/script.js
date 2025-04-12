let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function atualizarCar() {
  let itensCarrinho = document.getElementById("itens-carrinho");
  itensCarrinho.textContent = carrinho.length;
}

function addCar(obj) {
  // Recarrega o carrinho atualizado do localStorage
  carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

  // Adiciona o produto ao carrinho
  carrinho.push(obj);

  // salva o array completo
  localStorage.setItem("carrinho", JSON.stringify(carrinho));

  // Atualiza a contagem
  atualizarCar();

  console.log("Tamanho do carrinho:", carrinho.length);
  console.log("Produto adicionado ao carrinho:", obj);
  console.log("Carrinho atual:", carrinho);
}

const carregarProdutos = async () => {
  const response = await fetch('./produtos.json');
  const produtos = await response.json();

  const listaProdutos = document.querySelector(".lista-produtos");

  produtos.map(produto => {
    const produtoElement = document.createElement('div');
    produtoElement.classList.add("produtoCard");

    produtoElement.innerHTML = `
      <a href="${produto.url}" target="_blank">
        <img src="${produto.imagem}"/>
        <h3>${produto.descricao}</h3>
        <p>R$ ${produto.preco_venda}</p>
      </a>
      <button class="btn-comprar">Comprar</button>
    `;

    const btnComprar = produtoElement.querySelector(".btn-comprar");
    btnComprar.addEventListener("click", () => addCar(produto));

    listaProdutos.appendChild(produtoElement);
  });
}

// Inicializa o contador do carrinho ao carregar a página
atualizarCar();
carregarProdutos();
