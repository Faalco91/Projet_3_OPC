//Commande pour ciblé la div class="gallery".
const gallery = document.querySelector(".gallery");
//const ayant ciblé la div class = "filtres".
const filtres = document.querySelector(".filtres");
// variable qui permet de créer un tableau dans lequel on va par la suite affecter les images via l'API.
let imagesData = [];

//Fonction qui va nous permettre de générer les images dans la page avec leurs texte
function createImage(a){
 
    for(let i = 0; i < a.length; i++){
       //Commandes pour créer les élements figure>img,figcaption
       const figure = document.createElement("figure");
       figure.className = a[i].category.name;
       const imgArts = document.createElement("img");
       const figcaption = document.createElement("figcaption");
       //Commande pour ajouter le texte sous les images
       const text = document.createTextNode(a[i].edit);
    
       //Commandes pour placer les éléments aux bons endroits dans le HTML
       gallery.appendChild(figure);
       figure.appendChild(imgArts);
       figure.appendChild(figcaption);
       figcaption.appendChild(text);
       imgArts.crossOrigin = "anonymous";
       imgArts.src = a[i].imageUrl;
   }
    const bordure = document.createElement("div");
    bordure.className = "bordure";
    gallery.appendChild(bordure);

   return true;
}

//Commande pour appeler l'API/works
fetch('http://localhost:5678/api/works')
	.then(res => res.json())
    /* On appel dans l'API/works une variable qui va parcourir les images dans la "base de données", qui va être elle même affecter à imagesData
     qui comprendra donc toute les images dans un tableau afin de pouvoir le réutiliser de manière indépendante */
    .then(el => {
        imagesData = el;
        return el;
    })
    .then(data => createImage(data)) 