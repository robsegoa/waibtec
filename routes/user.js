module.exports = function(app){
	
	var user = app.controllers.user;

	app.get('/user', user.index);

}