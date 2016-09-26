module.exports = function(app){

	var User = app.models.user;

	var UserController = {
		index: function(req,res){
			User.find(function(err,data){
				if(err){
					console.log("err");
				}
				res.render('user/index', {lista: data});	
			});
			
		},	

		create: function(req,res){
			/*var model = new user({
				nome:'Robson',
				login: 'teste',
				senha: 'teste'
			})
			model.save(function(erro,data){
				if(erro){
					console.log(erro);
				}else{
					res.json(data);
				}
			});*/
			res.render("user/create");
		},
		insert: function(req,res){
			var model = new User(req.body)
			model.save(function(err){
				if(err){
					console.log(err);
				}
				//Só quando o flash 
				//req.flash('info', 'Usuario cadastrado com sucesso');
				res.redirect('/user');
			})
				
		},

		edit: function(req,res){
			User.findById(req.params.id, function(err, data){
				if(err){
					console.log(err);
				}else{
					res.render('user/edit', {value: data});
				}
			});
		},

		update: function(req,res){
			User.findById(req.params.id, function(err, data){
				if(err){
					console.log(err);
				}else{
					var model = data;
					model.nome	= req.body.nome;
					model.login	= req.body.login;
					model.save(function(err){
						if(err){
							console.log(err);
						}else{
							res.redirect('/user');
						}
					});

				}
			});
		},

		show: function(req,res){
			User.findById(req.params.id, function(err, data){
				if(err){
					console.log(err);
				}else{
					res.render('user/show', {value: data});
				}
			});
		},

		remove: function(req,res){
			User.remove({_id: req.params.id}, function(err, data){
				if(err){
					console.log(err);
				}else{
					res.redirect('/user');
				}
			});
		},

		//Lista por Json
		lista: function(req,res){
			User.find(function(err,data){
				if(err){
					console.log(err);
				}else{
					res.json(data);
				}
			});
		}

	}

	return UserController;
};