function formatarPreco(valor) {
  return valor.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL'
  });
}

function atualizarCarrinho() {
  const produtosCarrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  const qntProdutosCarrinho = document.querySelector('.qnt-produtos');

  // Atualiza a quantidade na interface
  const total = produtosCarrinho.length;
  qntProdutosCarrinho.textContent = total > 99 ? '+99' : total;
}

document.addEventListener('DOMContentLoaded', atualizarCarrinho);


/**
 * Exibir itens do carrinho
 */
function exibirItensCarrinho(){
  // busca o elemento
  const listaProdutosElement = document.querySelector('.lista-produtos-carrinho');

  // recupera itens no localStorage
  const itensCarrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

  // preço total
  let valorTotal = 0;
  const valorTotalElement = document.querySelector('.valor-total');

  itensCarrinho.map((i, index) => {
    const itemCard = document.createElement('div');
    itemCard.classList.add('item-card');
    itemCard.innerHTML = `
      <span>${index + 1}</span>
      <span class="produto-nome">${i.nome}</span>
      <span>${formatarPreco(i.preco)}</span>
      <button class="btnRemover">Remover</button>
      `;
    valorTotal += i.preco;
    valorTotalElement.textContent = `Total a pagar: ${formatarPreco(valorTotal)}`;

    listaProdutosElement.appendChild(itemCard);
  });
  console.log(valorTotalElement);
  
}

exibirItensCarrinho();