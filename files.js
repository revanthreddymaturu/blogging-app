//we need to require file system module first
// const fs=require('fs');



//reading files(this is a async method)

// fs.readFile('./docs/hello.txt',(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data.toString());
//     }
// })
// console.log("Im in sync")




//writing files(takes three arguments)

//the text in hello will be replaced by Hello everyone
// if the file doesnt exists, then it will create a file and write to it
// fs.writeFile("./docs/hello1.txt","Hello everyone",()=>{
// console.log("File was written");
// })
 





//directories

// if(!fs.existsSync('./assets')){ //we write this condition to check if directory already exists or not
// fs.mkdir('./assets',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("Folder Created")
//     }
// })}
// else{
//     fs.rmdir("./assets",(err)=>{
//         if(err){
//             console.log(err);
//         }
//         else{
//             console.log("Folder Deleted");
//         }
//     })
// }






//deleting files

// if(fs.existsSync('./docs/deleteme.txt')){
//     fs.unlink('./docs/deleteme.txt',(err)=>{
//         if(err){
//             console.log(err);
//         }
//         else{
//             console.log("File Deleted");
//         }
//     })
// }