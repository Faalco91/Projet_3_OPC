const modalPhoto2 = document.getElementById("modal-photo");
const modalSubmit = document.getElementById("modal-submit");
const principalContent = document.querySelector(".principal-content");
const bottomModal2 = document.querySelector(".bottom-modal-2");



/*function ajoutPhoto(){*/
const token = localStorage.getItem("authToken");

if(token){

const formAdd = document.createElement("form");

const imageLabel = document.createElement("label");
//imageLabel.textContent = "+ Ajouter photo";
imageLabel.setAttribute("for","image");

const imageInput = document.createElement("input");
imageInput.setAttribute("type", "file");
imageInput.setAttribute("id", "imgPhoto");
imageInput.setAttribute("name", "imgPhoto");
imageInput.setAttribute("accept", "image/*");
imageInput.textContent = "+ Ajouter photo";

const titleLabel = document.createElement("label");
titleLabel.textContent = "Titre";
titleLabel.setAttribute("for", "titre");

const titleInput = document.createElement("input");
titleInput.setAttribute("type", "text");
titleInput.setAttribute("id", "titleInputPhoto");
titleInput.setAttribute("name", "titleInputPhoto");
titleInput.classList.add("champ-text");

const categorieLabel = document.createElement("label");
categorieLabel.textContent = "Catégorie";
categorieLabel.setAttribute("for", "categorie");

const categorieSelect = document.createElement("select");
categorieSelect.setAttribute("id","categoriePhoto");
categorieSelect.setAttribute("name","categorie");
categorieSelect.classList.add("champ-text");

const nothingCategorie = document.createElement("option");
nothingCategorie.setAttribute("id", "nothingSelect");
//nothingCategorie.textContent = "";

const objectCategorie = document.createElement("option");
objectCategorie.setAttribute("id","objectSelect");
objectCategorie.textContent = "Objets";

const  appartementsCategorie = document.createElement("option");
appartementsCategorie.setAttribute("id", "appartementSelect");
appartementsCategorie.textContent = "Appartements";

const hotelRestoCategorie = document.createElement("option");
hotelRestoCategorie.setAttribute("id","hotelRestoSelect");
hotelRestoCategorie.textContent = "Hôtels & Restaurants";

const submitPhoto = document.createElement("input");
submitPhoto.setAttribute("type", "submit");
submitPhoto.setAttribute("value", "valider");
submitPhoto.setAttribute("id", "valider");






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
bottomModal2.appendChild(submitPhoto);
categorieSelect.appendChild(nothingCategorie);
categorieSelect.appendChild(objectCategorie);
categorieSelect.appendChild(appartementsCategorie);
categorieSelect.appendChild(hotelRestoCategorie);

const bordure2 = document.createElement("div");
bordure2.setAttribute("id", "bordure2");
principalContent.appendChild(bordure2);


//}
principalContent.style.cssText = "display: flex; flex-direction: column; align-items: center; justify-content: space-between; margin-top: 40px;";
formAdd.style.cssText = "display: flex; flex-direction: column;";
imageLabel.style.cssText = "display: flex; justify-content: center;";
bordure2.style.cssText = "border-bottom: 1px solid #a7a7a7; width: 100%; margin-top: 25px;";
submitPhoto.style.cssText = "display: flex; justify-content: center; color: white; background-color: #A7A7A7; margin: 2em auto; width: 237px; height: 36px; border: 0px; border-radius: 60px;";
bottomModal2.style.cssText = "margin-bottom: 20px;";
}