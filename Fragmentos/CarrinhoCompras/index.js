import { produtos, categorias } from "./produtos.js";

const produtosCarrinho = [];

function formatarPreco(valor) {
  return valor.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL'
  });
}

function exibirCategorias() {
  const listaProdutos = document.querySelector('.lista-produtos');

  categorias.map(c => {
    // Cria o título da categoria
    const categoriaElement = document.createElement('h2');
    categoriaElement.classList.add('categoria');
    categoriaElement.textContent = c;

    // Cria o container para os produtos desta categoria
    const produtosCategoriaElement = document.createElement('div');
    produtosCategoriaElement.classList.add('produtos-categoria');

    // Adiciona o título e o container na lista
    listaProdutos.appendChild(categoriaElement);
    listaProdutos.appendChild(produtosCategoriaElement);

    // Exibe os produtos nesta div específica
    exibirProdutosCategoria(c, produtosCategoriaElement);
  });
}

function exibirProdutosCategoria(categoria, containerElement) {
  const produtosCategoria = produtos.filter(p => p.categoria == categoria.toLowerCase());

  produtosCategoria.map(pc => {
    const cardProdutoElement = document.createElement('div');
    cardProdutoElement.classList.add('card-produto');
    cardProdutoElement.innerHTML = `
      <h4>${pc.nome}</h4>
      <h3>${formatarPreco(pc.preco)}</h3>
      <button class="btnComprar">Comprar</button>
    `;

    containerElement.appendChild(cardProdutoElement);

    const btnComprar = cardProdutoElement.querySelector('.btnComprar');
    btnComprar.addEventListener('click', () => {
      adicionarNoCarrinho(pc);
    });
  });
}

function adicionarNoCarrinho(produto) {
  const qntProdutosCarrinho = document.querySelector('.qnt-produtos');

  // Recupera o carrinho atual do localStorage ou inicia vazio
  const produtosCarrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

  // Adiciona o produto ao array
  produtosCarrinho.push(produto);

  // Salva o array atualizado de volta no localStorage
  localStorage.setItem('carrinho', JSON.stringify(produtosCarrinho));

  atualizarCarrinho();
}

function atualizarCarrinho() {
  const produtosCarrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  const qntProdutosCarrinho = document.querySelector('.qnt-produtos');

  // Atualiza a quantidade na interface
  const total = produtosCarrinho.length;
  qntProdutosCarrinho.textContent = total > 99 ? '+99' : total;
}

document.addEventListener('DOMContentLoaded', atualizarCarrinho);
exibirCategorias();
