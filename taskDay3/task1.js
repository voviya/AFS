obj1={
    "First Name":"Leo",
    "Last Name" :"Das",
    "age":25,
}
console.log(obj1)
Object.keys(obj1).forEach(key => {
    console.log("the",key,"is",obj1[key])
});