function myFunction(myParameter){
    if(myParameter){
        return "The parameter is true!";
    }
    return "The parameter is false!";
}
console.log(myFunction(1));
module.exports=myFunction;