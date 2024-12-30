
//without parameter
arrowfun=()=>{
    console.log("Student");
}
arrowfun();

//with parameter
arrowfun = (studentsDept)=>{
    return studentsDept[0];
}
console.log(arrowfun([['AIML,CSE,IT'],"AIML","CSE","IT"]))