//require will fetch the file that we mention inside it and it runs the file
const xyz=require("./people")

//xyz is a empty object initially, if we want to use names variable from people file, we need to export manually the names variable.
//now since we exported our names variable, xyz will have names variable value

console.log(xyz); 
// {} empty initially
//[ 'Sev', 'Raz', 'Ronny', 'Manny' ]
//{ names: [ 'Sev', 'Raz', 'Ronny', 'Manny' ], ages: [ 20, 25, 30, 35 ] }

const os=require('os'); // this is a built in module, this gives us lot of info about the OS
console.log(os);
console.log(os.platform(),os.homedir());