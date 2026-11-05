let cidades = ["Curitiba", "Gramado", "Florianópolis", "Porto Alegre", "Ouro Preto"];
for(let i=0; i < cidades.length; i++){
    console.log(cidades[i]);
};

console.log("\nAdicionando Parobé \n");
cidades.push("Parobé");

console.log("Removendo Curitiba \n");
cidades.shift();

for(i=0; i < cidades.length; i++){
    console.log(cidades[i]);
};