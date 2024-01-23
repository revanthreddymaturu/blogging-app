const http=require('http');
const fs=require('fs');
const _=require('lodash');
//creates a server, and callback function is called, everytime a request is made to the server
const server=http.createServer((req,res)=>{
    console.log(req.url,req.method); //gives request url and method
    console.log(_.random(1,20))
    //set header content type
    res.setHeader('Content-Type','text/html');
  // routing(This all will be done by using express framework much simpler)
  let path = './views/';
  switch(req.url) {
    case '/':
      path += 'index.html';
      res.statusCode = 200;
      break;
    case '/about':
      path += 'about.html';
      res.statusCode = 200;
      break;
    case '/about-us':
      res.statusCode = 301;
      res.setHeader('Location', '/about');
      res.end();
      break;
    default:
      path += '404.html';
      res.statusCode = 404;
  }
    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err);
            res.end();

        }
        else{
            //when you just want to write to a file once, instead of sending it to write method. You can send the data to end method directly.
            //res.write(data);
            res.end(data);
        }
    })
    // res.write('<p>hello, folks</p>');
    // res.write('<p>hello, again</p>');
    // res.end();
});

// we need to listen for the requests that are sent to it. we use listen method to do it
server.listen(3000,'localhost',()=>{
    console.log('listening to port 3000')
}) 