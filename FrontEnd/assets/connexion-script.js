 function userConnection(event){
    
    event.preventDefault();
    const email = document.getElementById("email").value;
    const mdp = document.getElementById("mdp").value;

    const passwordFiled = document.getElementById("mdp");
    const errorPassword = document.getElementById("mdp-error");

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
            passwordFiled.classList.add('error');
            errorPassword.textContent = "Erreur dans l'identifiant ou le mot de passe.";
            errorPassword.style.display = 'block';
            throw new Error ("Erreur dans l'identifiant ou le mot de passe.");
        }
    }).then(data => {
        token = data.token;
        localStorage.setItem("authToken", token);
        headers = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
         window.location.href="index.html";

    }).catch(error => {
        const errorMessage3 = document.getElementById("errorMessage3");
        errorMessage3.textContent = 'Coder erreur: ' + error.message;
    })
}