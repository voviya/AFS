var likeflag = 0;
var commentflag = 0;
var shareflag = 0;
var postflag = 0;


async function likePost(){
    var liked = new Promise((Lpost,ULpost)=>{
        if(!likeflag){
            Lpost("Post liked successfully");
            likeflag = 1;
        }else{
            ULpost("Post unliked successfully");
            likeflag = 0;
        }
    })
    return liked;
}

async function CommentPost(){
    var comment = new Promise((CTpost,UCTpost)=>{
        if(!commentflag){
            CTpost("Commented post successfully");
            commentflag = 1;
        }else{
            UCTpost("Comment deleted successfully");
            commentflag = 0;
        }
    })
    return comment;
}

async function SharePost(){
    var shared = new Promise((Spost,USpost)=>{
        if(!shareflag){
            Spost("Post shared successfully");
            shareflag = 1;
        }else{
            USpost("Post unshared successfully");
            shareflag = 0;
        }
    })
    return shared;
}

async function createPost(){
    var post = new Promise((Cpost,Upost)=>{
        if(!postflag){
            Cpost("Post created successfully");
            postflag = 1;
        }else{
            Upost("Post deleted successfully");
            postflag = 0;
        }
    })
    likePost().then((Smsg)=>{
        console.log(Smsg);
    }).catch(function(Fmsg){
        console.log(Fmsg);
    })

    SharePost().then((Smsg)=>{
        console.log(Smsg);
    }).catch(function(Fmsg){
        console.log(Fmsg);
    })

    CommentPost().then((Smsg)=>{
        console.log(Smsg);
    }).catch(function(Fmsg){
        console.log(Fmsg);
    })

    return post;

}
createPost().then((Smsg)=>{
    console.log(Smsg);
}).catch(function(Fmsg){
    console.log(Fmsg);
})
createPost().then((Smsg)=>{
    console.log(Smsg);
}).catch(function(Fmsg){
    console.log(Fmsg);
})