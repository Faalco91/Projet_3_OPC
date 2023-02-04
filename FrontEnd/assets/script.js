
//Commande pour ciblé la div class="gallery"
const gallery = document.querySelector(".gallery");
const filtres = document.querySelector(".filtres");
//Fonction qui va nous permettre de générer les images dans la page avec leurs texte
 function createFilter(){

    const tous = document.createElement("button");
    const objets = document.createElement("button");
    const appartements = document.createElement("button");
    const hotelresto = document.createElement("button");

    filtres.appendChild(tous);
    filtres.appendChild(objets);
    filtres.appendChild(appartements);
    filtres.appendChild(hotelresto);

}
console.log(createFilter());


function createImage(a){
    console.log(a);
    for(let i = 0; i <= a.length; i++){

        //Commandes pour créer les élements figure>img,figcaption
        const figure = document.createElement("figure");
        const imgArts = document.createElement("img");
        const figcaption = document.createElement("figcaption");
        //Commande pour ajouter le texte sous les images
        const text = document.createTextNode(a[i].title);

        //Commandes pour placer les éléments aux bons endroits dans le HTML
        gallery.appendChild(figure);
        figure.appendChild(imgArts);
        figure.appendChild(figcaption);
        figcaption.appendChild(text);
        imgArts.crossOrigin = "anonymous";
        imgArts.src = a[i].imageUrl;
    }
}

//Commande pour appeler l'API/works
fetch('http://localhost:5678/api/works')
	.then(res => res.json())
	.then(data => createImage(data))    
    


function filterImage(b){
   
}

//Commande pour l'API/categories
fetch('http://localhost:5678/api/categories')
        .then(response => response.json())
        .then(filter => filterImage(filter))

    
    