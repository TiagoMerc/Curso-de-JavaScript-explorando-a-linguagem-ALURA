console.log(`Trabalhando com listas`);

// const saoPaulo = `Sao Paulo`;
//const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(
  `Salvador`,
  `São Paulo`,
  `Rio de Janeiro`
);

listaDeDestinos.push(`Curitiba`)//adicionando um item na listagem

console.log("Destinos possíveis:");
//console.log(Salvador, sãoPaulo, rioDeJaneiro);

console.log(listaDeDestinos);
console.log("Item removido");
listaDeDestinos.splice(1,1); //Deletar no "índice" 1 um item
console.log(listaDeDestinos);

console.log("Exibir um único item da lista");
console.log(listaDeDestinos[1]+ " e "+ listaDeDestinos[0]);  //Exibir um item da lista especifico