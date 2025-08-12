// Lista de participantes
const participantes = ["Max", "Paul", "Ben", "Will", "Jonh"];

// Função para embaralhar a lista
function embaralhar(lista) {
  for (let i = lista.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [lista[i], lista[j]] = [lista[j], lista[i]];
  }
  return lista;
}

// Função para realizar o sorteio
function sortearAmigoSecreto(participantes) {
  const sorteados = embaralhar([...participantes]);
  const resultado = {};

  for (let i = 0; i < participantes.length; i++) {
    const amigo = sorteados[i];
    if (participantes[i] === amigo) {
      // Evita que alguém tire a si mesmo
      return sortearAmigoSecreto(participantes);
    }
    resultado[participantes[i]] = amigo;
  }

  return resultado;
}

// Executa o sorteio e exibe o resultado
const resultadoFinal = sortearAmigoSecreto(participantes);
console.log("Resultado do Amigo Secreto:");
for (const pessoa in resultadoFinal) {
  console.log(`${pessoa} tirou ${resultadoFinal[pessoa]}`);
}
