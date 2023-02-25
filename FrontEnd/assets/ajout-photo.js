const modalPhoto2 = document.getElementById("modal-photo");
const modalSubmit = document.getElementById("modal-submit");
const principalContent = document.querySelector(".principal-content");
const bottomModal2 = document.querySelector(".bottom-modal-2");



function ajoutPhoto(){
const token = localStorage.getItem("authToken");

if(token){

const formAdd = document.createElement("form");

const imageLabel = document.createElement("label");
imageLabel.textContent = "+ Ajouter photo";
imageLabel.setAttribute("for","image");

const imageInput = document.createElement("input");
imageInput.setAttribute("type", "file");
imageInput.setAttribute("id", "imgPhoto");
imageInput.setAttribute("name", "imgPhoto");
imageInput.setAttribute("accept", "image/*");

const titleLabel = document.createElement("label");
titleLabel.textContent = "Titre";
titleLabel.setAttribute("for", "titre");

const titleInput = document.createElement("input");
titleInput.setAttribute("type", "text");
titleInput.setAttribute("id", "titleInputPhoto");
titleInput.setAttribute("name", "titleInputPhoto");

const categorieLabel = document.createElement("label");
categorieLabel.textContent = "Titre";
categorieLabel.setAttribute("for", "categorie");

const categorieSelect = document.createElement("select");
categorieSelect.setAttribute("id","categoriePhoto");
categorieSelect.setAttribute("name","categorie");

const objectCategorie = document.createElement("option");
objectCategorie.setAttribute("id","objectSelect");
objectCategorie.textContent = "Objets";

const  appartementsCategorie = document.createElement("option");
appartementsCategorie.setAttribute("id", "appartementSelect");
appartementsCategorie.textContent = "Appartements";

const hotelRestoCategorie = document.createElement("option");
hotelRestoCategorie.setAttribute("id","hotelRestoSelect");
hotelRestoCategorie.textContent = "Hôtels & Restaurants";






modalPhoto2.appendChild(modalSubmit);
modalSubmit.appendChild(principalContent);
modalSubmit.appendChild(bottomModal2);
principalContent.appendChild(formAdd);
formAdd.appendChild(imageLabel);
formAdd.appendChild(imageInput);
formAdd.appendChild(titleLabel);
formAdd.appendChild(titleInput);
formAdd.appendChild(categorieLabel);
formAdd.appendChild(categorieSelect);
formAdd.appendChild(objectCategorie);
formAdd.appendChild(appartementsCategorie);
formAdd.appendChild(hotelRestoCategorie);

}

return true;

}