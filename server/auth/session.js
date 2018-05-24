let expressSession = require('express-session');
let mongoStore = require('connect-mongodb-session')(expressSession);
// var env = require('../config/env')

// console.log(process.env.CONNECTIONSTRING)

let store = new mongoStore(
	{
		uri: "mongodb://student:student@ds016298.mlab.com:16298/star-logs",
		collection: 'Sessions'
	});

// Catch errors 
store.on('error', function (error) {
	console.error(error);
});


var session = expressSession({
secret: 'It\'s not dangerous to go alone',
cookie: {
	maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week 
},
store,
resave: true,
saveUninitialized: true
})

module.exports = session;