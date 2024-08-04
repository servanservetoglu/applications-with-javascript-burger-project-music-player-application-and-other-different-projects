

function getCommentsById(url,Id){
    if(Id===null){
        return url;
    }
    else{
        return `${url}?postId${Id}`;
    }
}





function getComments(url ,Id){
    const newUrl=getCommentsById(url,Id);

    const xhr = new XMLHttpRequest();

    xhr.addEventListener("readystatechange",()=>{
        if(xhr.readyState==4&&xhr.status==200){
                console.log(JSON.parse(xhr.responseText))
        }
    })

    xhr.open("GET",newUrl);
    xhr.send();
}

getComments("https://jsonplaceholder.typicode.com/comments",null);