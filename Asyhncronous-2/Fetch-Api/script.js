function getStudent(url){
        fetch(url).then(response=>{
          return response.json();
        }).then(data=>console.log(data)).catch(eror=>console.log(data));

}
getStudent("app.json");