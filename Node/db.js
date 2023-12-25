const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://nish:mongonish7@cluster0.jvz0ckn.mongodb.net/test',(err)=>{
    if(!err)
    console.log('MongoDB connection succeeded.');
    else
    console.log('Error in connection: '+JSON.stringify(err,undefined,2));
});
module.exports= mongoose;
