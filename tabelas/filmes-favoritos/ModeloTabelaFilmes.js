const sequelize = require('sequelize');
const instancia = require('../../banco-de-dados');

const colunns = {
	acao: {
		type: sequelize.STRING,
		allowNull: false
	},
	aventura: {
		type: sequelize.STRING,
		allowNull: false
	},
	terror: {
		type: sequelize.STRING,
		allowNull: false
	},
	suspense: {
		type: sequelize.STRING,
		allowNull: false
	},
	romance: {
		type: sequelize.STRING,
		allowNull: false
	}
}

const options = {
	freezeTableName: true,
	tableName: "filmes-favoritos",
	timestamps: true,
	createdAt: "dataCriacao",
	updatedAt: "dataAtualizacao",
	version: "versao"
}

module.exports = instancia.define("filmesfavoritos", colunns, options);
