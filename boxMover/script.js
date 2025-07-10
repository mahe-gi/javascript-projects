const box = document.getElementById("box");

let val =0;
window.addEventListener("keydown",(e)=>{
    if(e.key == 'g'){
        box.style.left=`${val=val+20}px`;
    }
    if(e.key == 'h'){
        box.style.left=`${val=val-20}px`;

    }
})

