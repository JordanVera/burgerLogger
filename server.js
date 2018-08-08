 const express          = require('express'),
       bodyParser       = require('body-parser');
       

app.use(express.static(process.cwd() + '/public'));
app.use(bodyParser.urlencoded({	extended: false }));
app.set('view engine', 'handlebars');
app.use('/', routes);