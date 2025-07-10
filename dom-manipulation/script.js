
const imageUrl = document.getElementById("urlImage");
const text = document.getElementById("textImage");
const mainDiv = document.getElementById("main");

function addData(){
        const img = document.createElement("img");
        img.src =imageUrl.value;
        img.style.width="400px"
        console.log(img);
        const txt = document.createElement("p");
        txt.textContent = text.value;
        mainDiv.append(img,txt);

}

