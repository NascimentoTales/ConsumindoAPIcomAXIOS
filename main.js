const url = ("http://localhost:5500/api")
const newUser = {
    name: "Tales",
    avatar: "http://lorempixel.com.br/400/200/?1",
    city: "Itabuna"
}
const userUpdate = {
    name: "Maria Silva",
    avatar: "http://lorempixel.com.br/400/200/?1",
    city: "Ilhéus"
}
function getUsers() {
    
    axios.get(url)
        .then( response => {
            const data = response.data
            renderResults.textContent = JSON.stringify(data) 
        })
        .catch( error => {
            console.log(error);
        })
}

getUsers();

function addNewUser() {
    axios.post(url, newUser)
    .then(response => {
        alert(response.data)
    })
    .catch(error => {
        console.log(error)
    })
}
// addNewUser();

function updateUser() {
    // put Para update
    axios.put(`${url}/4`, userUpdate)
    .then(response => {
        alert(JSON.stringify(response.data));
    })
    .catch(error => {
        console.log(error);
    })
}
updateUser()

//Criar o delleteUser