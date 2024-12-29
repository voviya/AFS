function locationFinder(){
    train=8;
    return new Promise((resolve,reject)=>
    {
        if(train==7)
        {
            resolve ("Resolved");
        }
        else
        {
            reject ("Rejected");
        }
    }
)
}
locationFinder().then((resolveMsg)=>
{

}
)

