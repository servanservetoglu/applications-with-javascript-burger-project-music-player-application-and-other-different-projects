// let check =true;

// function createPromise(){
//     return new Promise((resolve,reject)=>{
//         if(check){
//             resolve ("İşlem tamamlandı")
//         }
//         else{
//             reject ("İşlem hata veriryor")
//         }
//     })

// }
// createPromise().then((response)=>{
//     console.log(response)
// }).catch((eror)=>{
//     console.log(eror);
// }).finally(()=>{console.log("her zaman çalışır")})






function readStudents(url){
    return  new Promise((resolve,reject)=>{
        const xhr =  new XMLHttpRequest();
        try {
            xhr.addEventListener("readystatechange",()=>{
                if(xhr.readyState==4 && xhr.status==200){
                    resolve (JSON.parse(xhr.responseText))
                }

            })
        } catch (error) {
                reject (error)
        }
       xhr.open("GET",url)
       xhr.send();
    })
}
    readStudents("student.json").then((response)=>{
        console.log(response)
    }).catch((eror)=>{
        console.log(eror)
    })