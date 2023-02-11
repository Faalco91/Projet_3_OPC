

/*async function userConnection(event){
    event.preventDefault();
    const email = document.getElementById("email").value;
    const mdp = document.getElementById("mdp").value;
    let token;


    const response = await fetch('http://localhost:5678/api/users/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          //  "Authorization": `Bearer ${localStorage.getItem("authToken")}`
        },
        body: JSON.stringify({
            email : email,
            password : mdp
        })
    })
    
    const data = await response.json();
    data.then(data => {
        console.log("Redirection vers la page d'accueil");
        window.location.assign("https://fr.javascript.info/fetch#requetes-post");
        token = result.token;
        localStorage.setItem("authToken", token);
        headers = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }).catch(erreur => {
        console.log("Erreur d'identifiant ou de mot de passe");
        alert("Erreur dans l’identifiant ou le mot de passe")
    });
} 
*/


 function userConnection(event){
    event.preventDefault();
    const email = document.getElementById("email").value;
    const mdp = document.getElementById("mdp").value;
    let token;


    const response = fetch('http://localhost:5678/api/users/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          //  "Authorization": `Bearer ${localStorage.getItem("authToken")}`
        },
        body: JSON.stringify({
            email : email,
            password : mdp
        })
    }).then(response => {
        if(response.ok){
            return response.json();
        } else {
            alert('Erreur dans l’identifiant ou le mot de passe');
        }
    }).then(data => {
        token = data.token;
        localStorage.setItem("authToken", token);
        headers = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
         window.location.href="index.html";

    })
} 


/*
async function userConnection(){

    const email = document.getElementById("email").value;
    const mdp = document.getElementById("mdp").value;
    let token;

    const headers = {
        "Content-Type": "application/json",
        //  "Authorization": `Bearer ${localStorage.getItem("authToken")}`
    };

    const response = await fetch('http://localhost:5678/api/users/login', {
        method: "POST",
        headers,
        body: JSON.stringify({
            email : email,
            password : mdp
        })
    });

    console.log(response.status);

    const result = await response.json();
    console.log(result);

    if(result.succes){
        console.log("Redirection vers la page d'accueil");
        token = result.token;
        localStorage.setItem("authToken", token);
        headers["Authorization"] = `Bearer ${token}`;
    } else {
        alert("Erreur dans l’identifiant ou le mot de passe");
    }
}*/

