module.exports = function(){
	var mongoose = require('mongoose');
	var Schema = mongoose.Schema;

	var user = new Schema({
		nome: String,
		login: String,
		senha: String,
		data_cad:{type:Date, default: Date.now}
	});
//Definindo entidade no mongo
	return mongoose.model('usuarios', user);

}
