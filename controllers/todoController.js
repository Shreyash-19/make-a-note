var mongoose=require('mongoose');
var bodyparser = require('body-parser');
mongoose.connect('mongodb+srv://shreyass_04:Tars252463@make-a-note.pmqgnoe.mongodb.net/test')

var todoSchema=new mongoose.Schema({
    item:String
})

var Todo=mongoose.model('Todo',todoSchema);
// var item1=Todo({item:'flowers'}).save(function(err){
   
//     console.log('item saved')
// })

// var data=[{item:'1'},{item:"2"},{item:'3'}]
var urlencodedParser=bodyparser.urlencoded({extended:false})
module.exports =function(app)
{
    app.get('/todo',function(req,res)
    {Todo.find({},function(err,data){
     if(err) throw err;
     res.render('todo',{data:data});

    });

    });
    app.post('/todo',urlencodedParser,function(req,res)
    { 
    
        var newTodo=Todo(req.body).save(function(err,data)
        {
            if (err) throw err;
            res.json(data);
        })
       
      
    
    });
    app.delete('/todo/:item',function(req,res)
    {Todo.find({item:req.params.item.replace(/\-/g,' ')}).remove(function(err,data){
        if (err) throw err
        res.render('todo',{data:data});
    })
//     data=data.filter(function(todo){
// return todo.item.replace(/ /g,'-')!==req.params.item
    });
    // res.json(data);

}
