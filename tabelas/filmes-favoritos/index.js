const modelo = require('./ModeloTabelaFilmes');

module.exports = {
	
	listar(){
		
		return modelo.findAll();
	}
}
