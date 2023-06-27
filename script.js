function buscarFamoso() {
  const dataAniversarioStr = document.getElementById("dataAniversario").value;
  const [anoAniversario, mesAniversario, diaAniversario] = dataAniversarioStr.split("-").map(Number);

  const script = document.createElement("script");
  script.src = "dados.js";
  document.head.appendChild(script);

  const resultado = document.getElementById("resultado");
  const famosoEncontrado = listaAniversarios.find((item) => {
    const [anoFamoso, mesFamoso, diaFamoso] = item.data.split("-").map(Number);
    return diaFamoso === diaAniversario && mesFamoso === mesAniversario;
  });

  if (famosoEncontrado) {
    resultado.innerHTML = `<h2>${famosoEncontrado.famoso}</h2><p>${famosoEncontrado.biografia}</p>`;
  } else {
    resultado.innerHTML = "<p>Nenhum famoso encontrado com essa data de aniversário.</p>";
  }
}
