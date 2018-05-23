let expressSession = require('express-session');
let MongoStore = require('connect-mongodb-session')(expressSession);
// var env = require('../config/env')

// console.log(process.env.CONNECTIONSTRING)

let store = new MongoStore(
	{
		uri: "mongodb://student:student@ds014648.mlab.com:14648/hackathon-jokes",
		collection: 'Sessions'
	});

// Catch errors 
store.on('error', function (error) {
	console.error(error);
});

module.exports = expressSession({
	secret: 'It\'s dangerous to go alone',
	cookie: {
		maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week 
	},
	store: store,
	resave: true,
	saveUninitialized: true
})