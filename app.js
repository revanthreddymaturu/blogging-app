import { MONGODB_CONNECTION_REQ } from './constants';
//require express app
const morgan=require('morgan'); 
const express=require('express');

const mongoose=require('mongoose');
const blogRoutes=require('./routes/blogRoutes')
//invoke express function to initiate express app
const app=express();

//connect to mongoDB
const dbURI=MONGODB_CONNECTION_REQ;
mongoose.connect(dbURI,{useNewUrlParser:true, useUnifiedTopology:true})
.then((result)=>{
    //listen for requests and also creates a server
    app.listen(3000);
    console.log("Connected to db");
})
.catch((err)=> console.log(err));
//register view engine
app.set('view engine','ejs')
 

//we can use morgan package for middleware functions
app.use(morgan('dev'));
//by default our server protects our files and doesnt give access. To give access to those files on browser, we need to create a folder(let's say public) and 
//place our files inside it.(ex: styles.css). And we need to use below function to open access
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

//middleware
// app.use((req, res, next) => {
//     console.log('new request made:');
//     console.log('host: ', req.hostname);
//     console.log('path: ', req.path);
//     console.log('method: ', req.method);
//     //next() is used to not block the flow of code because of middleware. If req is not found, then using next it moves to the remaining code, if we dont use it it gets hung.
//     next();
//   });

  //another middleware
//   app.use((req, res, next) => {
//     console.log('in the next middleware');
//     next();
//   });

//listen to get request
app.get('/',(req,res)=>{
    //Here instead of doing res.write and res.end, we can use res.send, and we need not set response headers, it gets automatically set by express
    // res.send('<p>Hello Folks</p>')
    
    //in general we send html pages, instead of strings. To send html pages, we use .sendFile
    //by default sendFile assumes the path to be absolute, so we need to add the root to it, to make it correct
    //res.sendFile('./views/index.html',{root:__dirname})
    // const blogs = [
    //     {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    //     {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    //     {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    //   ];
    //res.render searches for the ejs file in the views folder and returns as response
    // {title:'Home',blogs:blogs} this object is used to pass values like title and blogs to the ejs file, which can be accessed in it
    // res.render('index',{title:'Home',blogs:blogs}); // this can also be written as {title:'Home',blogs}
    res.redirect('/blogs')

})


//this middleware will not be reached if our request was to access / website
  //another middleware
//   app.use((req, res, next) => {
//     console.log('in the next next middleware');
//     next();
//   });

app.get('/about',(req,res)=>{
    //Here instead of doing res.write and res.end, we can use res.send, and we need not set response headers, it gets automatically set by express
    // res.send('<p>About</p>')
    res.render('about',{title:'About'});
})

//router
app.use(blogRoutes);

// //redirects
// app.get('/about-us',(req,res)=>{
//     //redirects to the mentioned page
//     res.redirect('/about');
// })

//404 page
//app.use is used to get executed if the request doesnt any match on above lines. This should be at the bottom of the file
app.use((req,res)=>{
    res.status(404).render('404',{title:'404'});
    
})