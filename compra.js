// Pega os dados da URL
const urlParams = new URLSearchParams(window.location.search);
const nome = urlParams.get('nome');
const preco = urlParams.get('preco');
const imagem = urlParams.get('imagem');

if (nome && preco && imagem) {
  document.getElementById('nome-produto').textContent = decodeURIComponent(nome);
  document.getElementById('preco-produto').textContent = `R$ ${preco}`;
  document.getElementById('imagem-produto').src = decodeURIComponent(imagem);
  document.getElementById('imagem-produto').alt = decodeURIComponent(nome);
}

function calcularFrete() {
  const cep = document.getElementById("cep").value;
  const resultado = document.getElementById("resultado-frete");

  if (cep.length < 8) {
    resultado.textContent = "CEP inválido.";
  } else {
    resultado.textContent = `Frete estimado: R$ 79,90 (Prazo: 7 dias úteis)`;
  }
}
