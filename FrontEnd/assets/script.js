
//Commande pour ciblé la div class="gallery".
const gallery = document.querySelector(".gallery");
//Const ayant ciblé la div class = "filtres".
const filtres = document.querySelector(".filtres");
//Variable qui permet de créer un tableau dans lequel on va par la suite affecter les images via l'API.
let imagesData = [];
//Consts pour créer la barre de modif d'admin
const adminBar1 = document.querySelector(".modif-bar-1");
const adminBar2 = document.querySelector(".modif-bar-2");
const iconEdit = document.querySelector(".icon-edit");
const login = document.getElementById("login");
//Const pour créer les elements modif sous le portrait
const modifPortrait = document.getElementById("modif-portrait");
//
const mesProjets = document.getElementById("mes-projets");
//Const pour interface modif vers la modal
const projetsModif = document.getElementById("projets-modif");
//
const modifIconLiens = document.getElementById("modif-icon-liens");
//
const modalAside = document.getElementById("modal");
//
const modalGalerie = document.getElementById("modal_galerie");
//
const gallery2 = document.querySelector(".gallery2");
//
const bottomModal = document.getElementById("")







function adminContent(){
const token =  localStorage.getItem("authToken");

if(token){

login.textContent = "logout";

const iconModif = document.createElement("i");
iconModif.classList.add("icon-edit","fa","fa-regular","fa-pen-to-square");
iconModif.setAttribute("id", "icon-edit-1");
const iconModif2 = document.createElement("i");
iconModif2.classList.add("icon-edit", "fa", "fa-regular", "fa-pen-to-square");
iconModif2.setAttribute("id", "icon-edit-2");
const iconModif3 = document.createElement("i");
iconModif3.classList.add("icon-edit", "fa", "fa-regular", "fa-pen-to-square");
iconModif3.setAttribute("id", "icon-edit-3");


const pEdit = document.createElement("p");
pEdit.classList.add("modif-bar");
pEdit.textContent = "Mode édition";
const pChang = document.createElement("p");
pChang.classList.add("modif-bar");
pChang.setAttribute("id", "changements");
pChang.textContent = "Publier les changements";

const modif = document.createElement("a");
modif.classList.add("a-modif"); 
modif.textContent = "modifier";
const modif2 = document.createElement("a");
modif2.classList.add("a-modif");
modif2.textContent = "modifier";


adminBar1.appendChild(adminBar2);
adminBar2.appendChild(iconModif);
adminBar2.appendChild(pEdit);
adminBar2.appendChild(pChang);
modifPortrait.appendChild(iconModif2);
modifPortrait.appendChild(modif);
mesProjets.appendChild(projetsModif);
projetsModif.appendChild(modifIconLiens);
/*modifIconLiens.appendChild(iconModif3);
modifIconLiens.appendChild(modif2);*/


adminBar1.style.cssText = 'display: flex; flex-direction: row; justify-content: center; align-items: center; width: 100%; margin: 0 auto; height: 60px; background-color: black; color: white;';
adminBar2.style.cssText = 'display: flex; flex-direction: row; justify-content: center; align-items: center; width: 100%;';
pChang.style.cssText = 'margin: 0px 10px; padding: 12px 20px; border-color: white; border-radius: 60px; background-color: white; color: black;';
pEdit.style.cssText = 'margin: 0px 10px;';

modifPortrait.style.cssText = 'display: flex; width: 80%; align-items: center; flex-direction: row; padding-top: 10px; margin: auto;';
projetsModif.style.cssText = "display: flex; flex-direction: row; justify-content: center; margin-top: 10px; margin-left: 30px; margin-bottom: auto; width: 100%;";
mesProjets.style.cssText = 'display: flex; flex-direction: column; justify-content: center; align-items: center; padding-top: 75px;';
modifIconLiens.style.cssText = 'display: flex; align-items: center; justify-content: space-around; height: 35px; width: 90px; margin-left: 25px;';

/*adminBar1.style.flexDirection = 'row';
adminBar1.style.justifyContent = 'center';
adminBar1.style.alignItems = 'center';
adminBar1.style.width = '100%';
adminBar1.style.margin = '0 auto';
adminBar1.style.height = '60px';
adminBar1.style.backgroundColor = 'black';
adminBar1.style.color = 'white';*/

/*adminBar2.style.flexDirection = 'row';
adminBar2.style.justifyContent = 'center';
adminBar2.style.alignItems = 'center';
adminBar2.style.width = '100%';*/

/*iconEdit1.style.fontSize = '16px';
iconEdit1.style.backgroundColor = 'black';

/*adminBar1.style = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
    width: '100%',
    margin: '0 auto',
    height: '60px',
    backgroundColor: 'black',
    color: 'white'
};

adminBar2.style = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
}
modifBar.style = {
    margin: '0px 10px'
}   /*
/*
modifBar2.style = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
}

iconEdit.style = {
    fontSize: '16px'
}

iconEdit1.style = {
    color: 'white',
    backgroundColor: 'black'
}

changement.style = {
    padding: '12px 20px',
    borderColor: 'white',
    borderRadius: '60px',
    backgroundColor: 'white',
    color: 'black'
}*/
}
}






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
    const token =  localStorage.getItem("authToken");
// erreur rencontré "impossible de lire propriété name sur élément undefined" donc condition de mise en marche de la fonction que si name !== undefined
if(!token){
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
        .then(res => res.json())
        //La variable filter va parcourir la fonction createFilter et permettre d'y afficher le .name de chaque catégories d'images à partir de l'API
        .then(filter => createFilter(filter))


/*fetch('http://localhost:5678/api/users/login')
        .then(res => res.json())
        .then()*/

