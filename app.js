var express=require('express')
var todoController=require('./controllers/todoController')

var app=express();

app.set('view engine','ejs')

app.use(express.static('./public'));

app.listen(3000);
todoController(app);

console.log('Just happen for a reason')
