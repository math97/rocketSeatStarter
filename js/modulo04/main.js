// var minhaPromise = ()=>{
//   return new Promise((resolve,reject)=>{
//     var xhr = new XMLHttpRequest();
    
//     xhr.open('GET','https://api.github.com/users/math97');
//     xhr.send(null);
    
//     xhr.onreadystatechange = ()=>{
//       if(xhr.readyState === 4){
//         if(xhr.status === 200){
//           resolve(JSON.parse(xhr.responseText))
//         }else{
//           reject('Erro na requisição')
//         }
//       }
//     }

//   })
// }

// var resultado = minhaPromise()
//   .then((response)=>{
//     console.log(response);
//   })
//   .catch((error)=>{
//     console.warn(error);
//   })
// console.log(resultado);
axios.get('https://api.github.com/users/math97')
  .then((response)=>{
    console.log(response);
  })
  .catch((error)=>{
    console.warn(error);
  })