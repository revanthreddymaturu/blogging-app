const express=require('express');
const Blog=require('../models/blog.js')
const router=express.Router();

router.get('/blogs',(req,res)=>{
    Blog.find().sort({createdAt:-1})
    .then((result)=> {
        res.render('index',{title:'All Blogs',blogs:result})
    })
    .catch((err)=>console.log(err));
    
})

//post request
router.post('/blogs',(req,res)=>{
    //req.body gives us all the form values.
    const blog=new Blog(req.body);
    blog.save()
    .then((result)=>{
        res.redirect('/blogs')
    })
    .catch((err)=>{
        console.log(err);
    })
    console.log(req.body);
})

router.get('/blog/:id',(req,res)=>{
    //req.params will give us all params the request has
    const id=req.params.id;
    Blog.findById(id)
    .then((result)=> res.render('details',{blog:result,title:'Blog Detail'})
    )
    .catch((err)=>console.log(err));  
})
router.delete('/blog/:id',(req,res)=>{
    const id=req.params.id;
    Blog.findByIdAndDelete(id)
    .then((result)=>res.json({redirect:'/blogs'}))
    .catch((err)=> console.log(err));
})
router.get('/blogs/create',(req,res)=>{
    res.render('create',{title:'Create a new blog'});
})

router.get('/add-blog', (req, res) => {
    const blog = new Blog({
      title: 'new blog 2',
      snippet: 'about my new blog',
      body: 'more about my new blog'
    })
    //Saves the current data to the dB
    blog.save()
    .then((result)=> res.send(result))
    .catch((err)=>console.log(err));
})

router.get('/all-blogs', (req, res) => {
    //Fetches all records from the dB of type Blog
    Blog.find()
    .then((result)=> res.send(result))
    .catch((err)=>console.log(err));
})
router.get('/single-blog', (req, res) => {
    //Fetches the specified blog by its id
    Blog.findById('65add6267777f62c9112bbf6')
    .then((result)=> res.send(result))
    .catch((err)=>console.log(err));
})
module.exports=router;