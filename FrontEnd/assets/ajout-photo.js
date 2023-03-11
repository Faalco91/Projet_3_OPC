const modalPhoto2 = document.getElementById("modal-photo");
const modalSubmit = document.getElementById("modal-submit");
const principalContent = document.querySelector(".principal-content");
const bottomModal2 = document.querySelector(".bottom-modal-2");
const addLinkPhoto = document.getElementById("modalPhotoAddLink");
const close2 = document.querySelector(".close2");
const gallery3 = document.querySelector(".gallery");



/*function ajoutPhoto(){*/
const token = localStorage.getItem("authToken");

if(token){

    const formAdd = document.createElement("form");


    const imageLabel = document.createElement("label");
    //imageLabel.textContent = "+ Ajouter photo";
    imageLabel.setAttribute("for","image");

    const iconImg = document.createElement("i");
    iconImg.classList.add("fa", "fa-light", "fa-image");
    iconImg.setAttribute("id", "icon-image");

    const buttonPhotoAdd = document.createElement("button");
    buttonPhotoAdd.setAttribute("type", "submit");
    buttonPhotoAdd.setAttribute("value", "buttonphotoAdd");
    buttonPhotoAdd.setAttribute("id", "buttonphotoAdd");
    buttonPhotoAdd.textContent = "+ Ajouter photo";

    const imageInput = document.createElement("input");
    imageInput.setAttribute("type", "file");
    imageInput.setAttribute("id", "inputFile");
    imageInput.setAttribute("name", "imgPhoto");
    imageInput.setAttribute("accept", "image/png, image/jpg");
    imageInput.setAttribute("maxlength", "4000000");
    imageInput.setAttribute("aria-label", "Ajouter photo");

    const formatImg = document.createElement("p");
    formatImg.setAttribute("id", "formatImage");
    formatImg.textContent = "jpg, png: 4mo max";

    const photoPreview = document.createElement("img");
    photoPreview.setAttribute("id", "apercuPhoto");
    photoPreview.setAttribute("src", "#");
    photoPreview.setAttribute("alt", "Apercu de la photo.")

    const labelElement = document.createElement("label");
    labelElement.setAttribute("id", "labelElement");
    labelElement.htmlFor = "inputFile";


    const titleLabel = document.createElement("label");
    titleLabel.textContent = "Titre";
    titleLabel.setAttribute("for", "titre");

    const titleInput = document.createElement("input");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("id", "titleInputPhoto");
    titleInput.setAttribute("name", "titleInputPhoto");
    titleInput.classList.add("champ-text", "champ");

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
    //modalSubmit.appendChild(close2);
    principalContent.appendChild(formAdd);
    formAdd.appendChild(imageLabel);
    formAdd.appendChild(buttonPhotoAdd);
    buttonPhotoAdd.appendChild(imageInput);
    formAdd.appendChild(titleLabel);
    formAdd.appendChild(titleInput);
    formAdd.appendChild(categorieLabel);
    formAdd.appendChild(categorieSelect);
    bottomModal2.appendChild(submitPhoto);
    categorieSelect.appendChild(nothingCategorie);
    categorieSelect.appendChild(objectCategorie);
    categorieSelect.appendChild(appartementsCategorie);
    categorieSelect.appendChild(hotelRestoCategorie);
    labelElement.appendChild(iconImg);
    labelElement.appendChild(buttonPhotoAdd);
    labelElement.appendChild(imageInput);
    labelElement.appendChild(formatImg);
    labelElement.appendChild(photoPreview);
    imageLabel.appendChild(labelElement);

    

    const bordure2 = document.createElement("div");
    bordure2.setAttribute("id", "bordure2");
    principalContent.appendChild(bordure2);

    //}
    principalContent.style.cssText = "display: flex; flex-direction: column; align-items: center; justify-content: space-between; margin-top: 40px;";
    formAdd.style.cssText = "display: flex; flex-direction: column;";
    imageLabel.style.cssText = "display: flex; justify-content: center;";
    bordure2.style.cssText = "border-bottom: 1px solid #a7a7a7; width: 100%; margin-top: 25px;";
    submitPhoto.style.cssText = "display: flex; justify-content: center; color: white; background-color: #A7A7A7; margin: 2em auto; width: 237px; height: 36px; border: 0px; border-radius: 60px;";
    //bottomModal2.style.cssText = "margin-bottom: 20px;";
    imageInput.style.display = "none";
    categorieSelect.style.cssText = "padding-left:10px;";

    addLinkPhoto.onclick = function appearmodalPhoto(){
        modalPhoto2.style.display = "block";
    } 
    
    close2.onclick = function exitmodalPhoto(){
        modalPhoto2.style.display = "none";
    }

    buttonPhotoAdd.addEventListener("click", function(){
        imageInput.click();
    
    });

    imageInput.addEventListener("change", function(){
        const file = this.files[0];
        if (file){
            const reader = new FileReader();
            reader.addEventListener("load", function(){
                photoPreview.setAttribute("src", this.result);
                photoPreview.style.display = "block";
                iconImg.style.display = "none";
                buttonPhotoAdd.style.display = "none";
                formatImg.style.display = "none";
            })
            reader.readAsDataURL(file);
        }
    });

    submitPhoto.addEventListener("click", function(){
        //On récupère les données du formulaire
        const title = document.getElementById("titleInputPhoto").value;
        const image = document.getElementById("inputFile").files[0];
        const category = document.getElementById("categoriePhoto").value;
        //Création d'un objet formData pour envoyer les données
        const formData = new FormData();
        
        formData.append("title", title);
        //console.log(formData);
        formData.append("image", image);

        formData.append("category", 1);
        //console.log({title,image,category});

        /*for (var pair of formData.entries()) {
            console.log(pair[0]+ ', ' + pair[1]);
        }*/

         // const token = localStorage.getItem("authToken");
        //console.log(token);
        console.log(image);

        //Envoi des données à l'API
        fetch('http://localhost:5678/api/works', {
            method: "POST",
            headers: {
                //Accept: "application/json",
                Authorization: `Bearer ${token}`,
                //"Content-type": "multipart/form-data"
            },
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            //Traiter la reponse de l'API
            const newImage = document.createElement('img');
            //newImage.src = data.url;
            //newImage.alt = data.title;
            gallery3.appendChild(newImage);
        })
        .catch(error => {
            //Afficher les erreurs
            console.error(error);
        });
    });

}

/*window.onclick = function exitatanywhere(event) {
    if (event.target == modalPhoto2) {
        modalPhoto2.style.display = "none";
    }
}*/