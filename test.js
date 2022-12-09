
function getTestUser(){
    axios.get(url)
    .then(response => {
       const data = response.data
       const container = document.getElementById("renderResults2")

       
           container.innerHTML = `${data}`
       
    })
    .catch(error => console.log(error))
}getTestUser()

