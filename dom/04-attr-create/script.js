var attribute1 = source.getAttribute("data-image");
console.log(attribute1);
/*var image1 = document.createElement("img");
var parent = document.querySelector("html");
parent.appendChild(image1);*/


function rajouter_img(){

    var noeudBalise = document.createElement('img');

    var noeudParent = document.querySelector("#target");
    

    noeudParent.appendChild(noeudBalise);
    

    

}
rajouter_img();
/*var valueIntoImg = document.getElementById("target.img").innerHTML = attribute1;*/