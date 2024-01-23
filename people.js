const names=["Sev","Raz","Ronny","Manny"];
const ages=[20,25,30,35];
console.log(names);
//to export, we use module.exports(whatever will be the value of module.exports, that will be given to the variable that requires it.(see modules file for clarity))
module.exports=names;
//to export multiple variables
module.exports={
    names:names, //this can have name other than names as well, but it is nicer to have same name for less confusion
    ages:ages
}