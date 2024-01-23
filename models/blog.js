const mongoose=require('mongoose');
//This is used to create schemas. Schema is constructor kind of thing.
const Schema=mongoose.Schema;
//this is how we define the structure of data i.e, Schema
const blogSchema=new Schema({
    title: {
        type: String,
        required:true
    },
    snippet:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },

},{timestamps:true});

//Now we use a model to enclose the schema to use it.
//First param is the name of the model(it searches by mkaing it plural i.e, it searches for blogs in the dB), second is the name of the schema.
const Blog=mongoose.model('Blog',blogSchema);
module.exports=Blog;