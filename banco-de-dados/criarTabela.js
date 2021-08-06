const modeloTabelaFilmes = require('../tabelas/filmes-favoritos/ModeloTabelaFilmes');

modeloTabelaFilmes.sync().then(() => {
	
	console.log("Tabela Criada Com Sucesso");
}).catch(console.log);