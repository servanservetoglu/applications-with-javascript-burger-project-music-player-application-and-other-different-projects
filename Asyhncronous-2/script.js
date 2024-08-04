const users=[
    {userId:5 , post:"Servan post-1"},
    {userId:5 , post:"Servan post-2"},
    {userId:5 , post:"Servan post-3"},
    {userId:6 , post:"Hakan post-1"},
    {userId:7 , post:"Betül post-1"},
]


function getUserId(callback){
    setTimeout(()=>{
    userId=6;
    callback (userId);
    },1000)
}

function getUserPostById(userId,callback){

    setTimeout(()=>{
        users.forEach((user) => {
            if(user.userId==userId){
                console.log(userId +" "+user.post)
            }
        });
    },500)
}

// getUserId((Id)=>{

//         getUserPostById(Id,(userPost)=>{
//             console.log(Id  +" " + userPost)
//         });


// });
///////////////// OR

getUserId(getUserPostById)
