// array vazio para receber o objeto dos projetos com nome de preço
let carrinho = [];
let total = 0;

function adicionarAoCarrinho(nome, preco) {
  carrinho.push({ nome, preco });
  total += preco;
  atualizarCarrinho();
}

function atualizarCarrinho() {
  // busca o id carrinho no HTML e o armazena em lista
  const lista = document.getElementById("carrinho");
  lista.innerHTML = "";

  // utiliza o laço de repetição foreach com uma função anônima
  carrinho.forEach((item, index) => {
    // a cada iteração cria um elemento li
    const li = document.createElement("li");
    // adiciona um conteúdo a cada elemento li
    li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)} `;
    
    // adicionar o botão de remover
    const removerBtn = document.createElement("button");
    removerBtn.textContent = "Remover";
    removerBtn.onclick = () => removerDoCarrinho(index);

    // realiza as inserções dos elementos em li e lista respectivamente
    li.appendChild(removerBtn);
    lista.appendChild(li);
  });

  document.getElementById("total").textContent = total.toFixed(2);
}

function removerDoCarrinho(index) {
  total -= carrinho[index].preco;
  carrinho.splice(index, 1);
  atualizarCarrinho();
}
