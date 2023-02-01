
//Commande pour ciblé la div class="gallery"
const gallery = document.querySelector(".gallery");

function createImage(a){
    console.log(a);
    for(let i = 0; i <= a.length; i++){

        const figure = document.createElement("figure");
        const imgArts = document.createElement("img");
        const figcaption = document.createElement("figcaption");
        const text = document.createTextNode(a[i].title);


        gallery.appendChild(figure);
        figure.appendChild(imgArts);
        figure.appendChild(figcaption);
        figcaption.appendChild(text);
        imgArts.crossOrigin = "anonymous";
        imgArts.src = a[i].imageUrl;

        
        
    }
}

fetch('http://localhost:5678/api/works')
	.then(res => res.json())
	.then(data => createImage(data))

    