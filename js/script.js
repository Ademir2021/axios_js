const url = "http://localhost:3000/api"

let user = {}

getUser()
addUser()
//updateUser()
//deleteUser()
//getOneUser()

function addUser(){
    const botaoAdicionar = document.querySelector("#add");
    botaoAdicionar.addEventListener("click",function(e){
        e.preventDefault()
        });
        user.name = document.getElementById("name").value
        user.avatar = document.getElementById("avatar").value
        user.city = document.getElementById("city").value

        if(user.name && user.avatar && user.city != "" ){
        addNewUser()
        document.getElementById("name").value = ""
        document.getElementById("avatar").value = ""
        document.getElementById("city").value = ""
        alert("Inserido com sucesso")
        }else{
            alert("Preencher todos os campos")
        }    
    }

function getUser(){
    axios.get(url)
    .then(response =>{
        const data = response.data
       renderResults.textContent = JSON.stringify(data)
    })
    .catch(error =>console.log(error))
}

function addNewUser(){
    axios.post(url, user)
    .then(response =>{
        alert(JSON.stringify(response.data))
    })
    .catch(error => console.log(error))
}

function updateUser(){
    axios.put(`${url}/1`, userUpdate)
    .then(response =>{
        alert(JSON.stringify(response.data))
    })
    .catch(error => console.log(error))
}

function deleteUser(){
    axios.delete(`${url}/1`)
    .then(response => {
        alert(JSON.stringify(response.data))
    })
    .catch(error => console.log(error))
}

function getOneUser(){
    axios.get(`${url}/1`)
    .then(response => {
        const data = response.data
        renderResults.textContent = JSON.stringify(data)
    })
    .catch(error => console.log(error))
}
