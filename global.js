//global object
//console.log(global);
// global.setTimeout(() => {
//     console.log("global");
// }, 3000);
 //SAME AS ABOVE, WE HAVE ACCESS TO GLOBAL IN NODEJS ENVIRONMENT
// setTimeout(() => {
//     console.log("global NO REF");
// }, 1000);

//__dirname= gives us absolute path of the directory our file is present in==/Users/my-macbook/Dev Practice/node-crash-course
//__filename=gives us absolute path of the directory we are in, plus the file name added to it==/Users/my-macbook/Dev Practice/node-crash-course/global.js
console.log(__dirname);
console.log(__filename);
