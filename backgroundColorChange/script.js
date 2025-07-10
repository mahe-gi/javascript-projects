let ab = document.querySelector('.Bgdiv');

console.log(ab)
const color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];


function change(){
    let index = Math.ceil(Math.random()*5);
      ab.style.background =color[index]

}
