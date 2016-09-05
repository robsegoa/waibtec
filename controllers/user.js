module.exports = function(app){

	var UserController = {
		index: function(req,res){
			res.render('user/index');
		}
	}

	return UserController;
};