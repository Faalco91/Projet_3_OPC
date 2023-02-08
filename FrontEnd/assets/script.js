
//Commande pour ciblé la div class="gallery".
const gallery = document.querySelector(".gallery");
//const ayant ciblé la div class = "filtres".
const filtres = document.querySelector(".filtres");
// variable qui permet de créer un tableau dans lequel on va par la suite affecter les images via l'API.
let imagesData = [];



//Fonction appelé dans createFilter qui s'occupe donc du filtrage des images par le .name
function showImg(b, imagesData){

    //Commande qui permet d'enlever des images avec leurs textes.
    const imgToRemove = document.querySelectorAll('.gallery > figure');
    //Ce qui va nous permettre de passer imgToRemove en tableau
    const imgToRemoveArray = Array.from(imgToRemove);
    //Code CSS qui va mettre de base un display: none sur les images, sauf c'elles qui correspondent au filtrage choisi.
    imgToRemoveArray.forEach(img => {
        img.style.display = "none" ;
     });
    /* On filtre le tableau imageData t.q result = les images qui ont pour .name le meme nom que celui du boutton associé. 
    ex: button="Objets" & .name = "Objets" */
    let result = imagesData.filter(image => image.category.name == b);


    /* Condition spécifique pour le fonctionnement du bouton "Tous" du filtre, qui va permettre donc d'afficher toute les images quand 
    la variable b passée en argument de la fonction aura pour valeur "tous. */
    if (b == 'tous'){
        createImage(imagesData);
    } else {
        createImage(result);
    }

    console.log(result);
}


 
//Fonction qui va permettre de créer les filtres du sites.
function createFilter(name){
// erreur rencontré "impossible de lire propriété name sur élément undefined" donc condition de mise en marche de la fonction que si name !== undefined
if(name !== undefined){

    const tous = document.createElement("button");
    tous.innerHTML = 'Tous';
    tous.className = 'btn-filter';
    tous.setAttribute("id", "tous-btn");
    tous.addEventListener("click", function () { showImg("tous", imagesData); });


    const objets = document.createElement("button");
    objets.innerHTML = name[0].name;
    objets.className = 'btn-filter';
    objets.setAttribute("id","objets-btn");
    objets.addEventListener("click", function() {showImg(name[0].name, imagesData)});

    const appartements = document.createElement("button");
    appartements.innerHTML = name[1].name;
    appartements.className = 'btn-filter';
    appartements.setAttribute("id","appartements_btn");
    appartements.addEventListener("click", function() {showImg(name[1].name, imagesData)});


    const hotelresto = document.createElement("button");
    hotelresto.innerHTML = name[2].name;
    hotelresto.className = 'btn-filter';
    hotelresto.setAttribute("id","hotelresto-btn");
    hotelresto.addEventListener("click", function() {showImg(name[2].name, imagesData)});

    filtres.appendChild(tous);
    filtres.appendChild(objets);
    filtres.appendChild(appartements);
    filtres.appendChild(hotelresto);

}    
}



//Fonction qui va nous permettre de générer les images dans la page avec leurs texte
function createImage(a){
 
     for(let i = 0; i < a.length; i++){
        //Commandes pour créer les élements figure>img,figcaption
        const figure = document.createElement("figure");
        figure.className = a[i].category.name;
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
    

///Commande pour appeler l'API/categories
fetch('http://localhost:5678/api/categories')
        .then(response => response.json())
        //La variable filter va parcourir la fonction createFilter et permettre d'y afficher le .name de chaque catégories d'images à partir de l'API
        .then(filter => createFilter(filter))


    