 const express      = require('express'),
       app          = express(),
       bodyParser   = require('body-parser'),
       hbs          = require('express-handlebars'),
       PORT         = process.env.PORT || 8080;
       

app.use(express.static(process.cwd() + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'hbs');
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'main'}))


app.listen(PORT, () => {
      console.log("Server listening on port " + PORT);
  });