const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
var app = express();

const port = process.env.PORT || 8080;

hbs.registerPartials(__dirname+'/views/partials');

app.set('view engine','hbs')
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views/img'))

hbs.registerHelper('getCurrentYear',()=>{
	return new Date().getFullYear();
})

//hbs.registerHelper('message',(text)=>{
//	return text.toUpperCase();
//})

//app.use((request,response,next)=>{
//	var time = new Date().toString();
	//console.log(`${time}: ${request.method} ${request.url}`);
//	var log = `${time}: ${request.method} ${request.url}`
//	fs.appendFile('server.log', log+'\n', (error) =>{
//		if(error){
//			console.log('Unable to log message')
//		}
//	});
//	next();
//});

//app.use((request,response,next)=>{
//	console.log('Maintenance');
//	response.render('maintenance.hbs',{
//		title:'Maintenance Page',
//		message:'The site is currently down for a maintenance'
//	});
//});

//app.get('/', (request, response) => {
	// response.send('<h1>Hello Express!</h1>');
//	response.send({
//		name: 'Your Name',
//		school: [
//			'BCIT',
//			'SFU',
//			'UBC'
//		]
//	})
//});




app.get('/', (request, response) => {
    response.send('<h1>Hello!</h1>' +
   	'<a href="/">Main<br></a>'+
       '<a href="/info">About me</a>' +
      '<p></p>');
});


app.get('/info', (request, response) => {
	response.render('about.hbs',{
		title:'about page',
		name:'Roy',
		content:'Main',
		year: new Date().getFullYear(),
		welcome: 'Hello!',
		img: 'img.jpg',
		info_page: '/info',
		main_page:'/'
	});
});

app.get('/404', (request, response) => {
	response.send({
		error: 'Page not found'
	})
})

app.listen(port, () => {
	console.log(`Server is up on the port ${port}`);
});