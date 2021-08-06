const router = require('express').Router();
const tabelaFilmesFavoritos = require('../../tabelas/filmes-favoritos');

router.use('/', async (req, res) => {
	
	const results = await tabelaFilmesFavoritos.listar();
	res.send(JSON.stringify(results));
});

module.exports = router;