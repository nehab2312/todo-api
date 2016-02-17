var Sequelize = require('sequelize');
var sequelize = new Sequelize(undefined,undefined,undefined,{
		'dialect' : 'sqlite',
		'storage' : __dirname + '/basic-sqlite-database.sqlite'
});

var Todo = sequelize.define('todo',{
	description:{
		type : Sequelize.STRING,
		notNull : false,
		validate :{
			len : [1,250]
		}
	},
	completed :{
		type :Sequelize.BOOLEAN,
		allowNull :false,
		defaultValue :false
	}
});

sequelize.sync({
	//force:true
}).then(function(){
	console.log('Everything is synced');
	/*Todo.create({
		description :'Its first sqlite insert',
		completed:false
	}).then (function (){
		return Todo.create({
			description :'Its second sqlite insert'
		})
	}).then(function(todo){
		console.log('TODO');
		console.log(todo);
	});*/

	Todo.findById(1).then(function(todo){
		if(todo){
			console.log(todo.toJSON());
		}
		else
		{
			console.log('no data found');	
		}
	})
})

