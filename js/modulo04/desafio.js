//Exercício 1 ------------
function checaIdade(idade){
  return new Promise((resolve,reject)=>{
    if(idade>18) resolve()

    else reject()
  });

}

checaIdade(16)
  .then(()=>{
    console.log("Maior que 18");
  })
  .catch(()=>{
    console.log("Menor que 18");
  })

  //desafio 2 ------------------
  async function getName(){
    var name = document.querySelector('div#ex2 input#user')
    var divElement = document.querySelector('div#ex2')
    var ul = document.createElement('ul')
    var li = document.createElement('li')
    li.setAttribute('id','carregando')
    var text = document.createTextNode(`Carregando...`)
    divElement.appendChild(ul)
    li.appendChild(text)
    ul.appendChild(li)
    var repo = await gitHub(name.value)
    console.log(repo);
    
    var repos=repo.data
    showRepo(repos)

    
  }
  function gitHub(name){
    return new Promise((resolve,reject)=>{
      axios.get(`https://api.github.com/users/${name}/repos`)
      .then((response)=>{
        resolve(response)
      })
      .catch((error)=>{
        alert('Esse usuário não existe')
      })
    })
  }

  function showRepo(data){
    var ul = document.querySelector('div#ex2 ul')
    var liRemove = document.querySelector('div#ex2 ul li#carregando')
    ul.removeChild(liRemove)
    for (d of data){
      var li = document.createElement('li')
      var text = document.createTextNode(`repo ${data.indexOf(d)}:${d.name}`)
      li.appendChild(text)
      ul.appendChild(li)
    }
  }