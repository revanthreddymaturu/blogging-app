//often times we have a very large file system. to access the files, read and write files isn ot enough. So, we have something called streams and buffers in node. Using streams, 
//we can access data in large files using streams, where we get chunks of data ready to use.
const fs=require('fs');

//read stream
const readStream=fs.createReadStream("./docs/largefile.txt",{encoding:'utf8'}); //adding encoding converts the data to readable format

//write stream
const writeStream=fs.createWriteStream('./docs/largefilecopy.txt');

readStream.on('data',(chunk)=>{
    console.log("-----NEW CHUNK------");
    console.log(chunk); //chunk will give buffer data which is not human readable. To make it readable, we need to use tostring method, or encode it at the top, i.e, add a parameter 
    //to createReadStream method

    //writing to stream
    writeStream.write('\nNEW CHUNK\n');
    writeStream.write(chunk);
})

//when we are doing a readStream to writestream copy, we can use piping(pipe method). Piping does the same as above under the hood but using a much simplified method pipe
