/*async function funName()
{
    return "Hello"
}
arrowfun=async()=>
{
    return "KEC"
}
console.log(funName())
console.log(arrowfun())
*/

/*
async function funName1()
{
    console.log("Hi")
}

arrowfun1=async()=>
{
    console.log("Kongu")
}
funName1()
arrowfun1()
*/

/*
async function funName2()
{
    console.log("Hi")
}
arrowfun2=async()=>{
    setTimeout(()=>
    {
    return "Hello"
    },2000)
}
console.log(funName2())
console.log(arrowfun2())
*/

/*
async function funName3() {
    setTimeout(()=>
    {
        return "hello1"
    },1000)
    console.log(await "kec1")
}
arrowfun3=async()=>{
    setTimeout(()=>
    {
        return "hello2"
    },1000)
    console.log(await "kec2")
}
console.log(funName3())
console.log(arrowfun3())
*/

async function funName3() {
      return await "hello1"  
}
console.log(funName3())