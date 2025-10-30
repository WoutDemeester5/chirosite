const img = document.getElementById("startdag");

let index = 1;

img.onclick = () =>{
    if(index === 15){
        img.setAttribute("src","images/apocolyps.jpg");
        img.onclick = () => {
            img.setAttribute("src","images/startdag 2023-2024.png");
            index = 1;
        }
    }
    index++;
}