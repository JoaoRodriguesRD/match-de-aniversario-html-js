function buscarFamoso() {
  var dataAniversarioStr = document.getElementById("dataAniversario").value;
  var dataAniversarioArr = dataAniversarioStr.split("-");
  var diaAniversario = parseInt(dataAniversarioArr[2]);
  var mesAniversario = parseInt(dataAniversarioArr[1]);

  var script = document.createElement('script');
  script.src = 'dados.js';
  document.head.appendChild(script);

  var resultado = document.getElementById("resultado");
  for (var i = 0; i < listaAniversarios.length; i++) {
    var dataFamoso = listaAniversarios[i].data;
    var diaFamoso = parseInt(dataFamoso.split("-")[2]);
    var mesFamoso = parseInt(dataFamoso.split("-")[1]);

    if (mesFamoso === mesAniversario && diaFamoso === diaAniversario) {
      resultado.innerHTML = "<h2>" + listaAniversarios[i].famoso + "</h2><p>" + listaAniversarios[i].biografia + "</p>";
      return;
    }
  }

  resultado.innerHTML = "<p>Nenhum famoso encontrado com essa data de aniversário.</p>";
}

