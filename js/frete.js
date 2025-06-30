function calcularFrete() {
  const cep = document.getElementById("cep").value;
  const resultado = document.getElementById("resultado-frete");

  if (cep.length < 8) {
    resultado.textContent = "CEP inválido.";
  } else {
    resultado.textContent = `Frete estimado: R$ 79,90 (Prazo: 7 dias úteis)`;
  }
}