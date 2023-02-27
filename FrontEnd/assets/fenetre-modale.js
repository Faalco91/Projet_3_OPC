//Commande pour ciblé la div class="gallery2".
const gallery_2 = document.querySelector(".gallery2");
//
const modal_galerie = document.getElementById("modal_galerie");
//
const bottom = document.querySelector(".bottom_modal");
// variable qui permet de créer un tableau dans lequel on va par la suite affecter les images via l'API.
let imagesData2 = [];
//

//
const btn = document.getElementById("amodal");
//
const modal = document.getElementById("modal");
//
const exit = document.getElementsByClassName("close")[0];
modal.focus();
const images = document.querySelectorAll("images");














//Fonction qui va nous permettre de générer les images dans la page avec leurs texte
function createImage2(a){

    const token =  localStorage.getItem("authToken");

    if(token){
        
 
    for(let i = 0; i < a.length; i++){
       //Commandes pour créer les élements figure>img,figcaption
       const figure = document.createElement("figure");
       figure.className = a[i].category.name;
       figure.classList.add("imgs2");
       figure.setAttribute("id","" + (i+1));
       const imgArts = document.createElement("img");
       imgArts.classList.add("images");
       const figcaption = document.createElement("figcaption");
       //Commande pour ajouter le texte sous les images
       const text = document.createTextNode("éditer");
       const buttonSupp = document.createElement("button")
       buttonSupp.classList.add("trash-button");
       const trash = document.createElement("i");
       trash.classList.add("icon-edit-4", "fa-solid", "fa-trash-can");




    
       //Commandes pour placer les éléments aux bons endroits dans le HTML
       gallery_2.appendChild(figure);
       figure.appendChild(imgArts);
       figure.appendChild(figcaption);
       figure.appendChild(buttonSupp);
       buttonSupp.appendChild(trash);
       figcaption.appendChild(text);
       imgArts.crossOrigin = "anonymous";
       imgArts.src = a[i].imageUrl;

       buttonSupp.addEventListener("click", function() {

        const token =  localStorage.getItem("authToken");
        var imgasupp = this.parentElement.id;//récupère l'id de la figure parent

        fetch(`http://localhost:5678/api/works/${imgasupp}`, {
            method: "DELETE" ,
            headers: {
            Authorization: `Bearer ${token}`,
            },
        })
          .then(response => {
            if (response.ok) {
              // Si la suppression réussit, supprimez également l'élément du DOM
              const figureToRemove = document.querySelectorAll(`[id="${imgasupp}"]`);
              figureToRemove.forEach(el => el.parentNode.removeChild(el));
              /*const figureToHide = document.getElementById(imgasupp);
              figureToHide.style.display = "none";*/
            } else {
                throw new Error("La suppression à échoué");
            }
          })
          .catch(error => console.error(error));
});
       
   }
    const bordure = document.createElement("div");
    bordure.className = "bordure";
    gallery2.appendChild(bordure);
    const addphoto = document.querySelector("#addphoto");
    bottom.appendChild(addphoto);
    const supp = document.querySelector("#supp_galerie");
    bottom.appendChild(supp);
    
    return true;
}
}
/*for(let i = 0; i < images.length; i++){
    const images = document.querySelectorAll("imgs2");
    var buttonSupp = document.createElement("button")
    buttonSupp.textContent = "Supprimer";
    buttonSupp.addEventListener("click", function() {
        var imgasupp = this.previousElementSibling;
        modal.removeChild(imgasupp);
    });
    images[i].parentElement.appendChild(buttonSupp);
}*/
//Fonction qui va permettre de supprimer les images que l'on choisiras de supprimer via le bouton delete
btn.onclick = function disappearsmodal() {
    modal.style.display = "block";
    console.log(btn);
}
exit.onclick = function exitmodal(){
    modal.style.display = "none";
}
window.onclick = function exitatanywhere(event){
    if(event.target == modal){
        modal.style.display = "none";
    }
}
//Commande pour appeler l'API/works
fetch('http://localhost:5678/api/works')
	.then(res => res.json())
    /* On appel dans l'API/works une variable qui va parcourir les images dans la "base de données", qui va être elle même affecter à imagesData
     qui comprendra donc toute les images dans un tableau afin de pouvoir le réutiliser de manière indépendante */
    .then(el => {
        imagesData2 = el;
        return el;
    })
    .then(data => createImage2(data))