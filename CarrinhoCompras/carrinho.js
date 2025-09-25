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

  exibirItensCarrinho();
}

document.addEventListener('DOMContentLoaded', atualizarCarrinho);


/**
 * Exibir itens do carrinho
 */
function exibirItensCarrinho() {
  // busca o elemento
  const listaProdutosElement = document.querySelector('.lista-produtos-carrinho');
  listaProdutosElement.innerHTML = '';

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

    const btnRemover = itemCard.querySelector('.btnRemover');
    btnRemover.addEventListener('click', () => {
      removerItem(i);
    });

  });

}

function removerItem(produto) {
  alert(`Removendo o produto: ${produto.nome} - ${produto.preco}`);

  const itensCarrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

  // Encontra o índice da primeira ocorrência do item
  const index = itensCarrinho.findIndex(item =>
    item.nome === produto.nome && item.preco === produto.preco
  );

  // Se encontrou, remove
  if (index !== -1) {
    itensCarrinho.splice(index, 1);
    localStorage.setItem('carrinho', JSON.stringify(itensCarrinho));
    // console.log('Produto removido. Carrinho atualizado:', itensCarrinho);
  } else {
    alert('Produto não encontrado.');
  }

  atualizarCarrinho();
}

exibirItensCarrinho();