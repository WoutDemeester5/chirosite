
const webs = document.getElementsByClassName('eWeb');

for(let web of webs){
    const img = document.createElement('img');
    img.src = "images/winkelkar.png";
    web.appendChild(img);

    const p = web.getElementsByTagName('p');

    const text = p[0].innerText;

    img.onclick = () => {
        confirm(`Dit artikel kost ${text.split("\n")[1]}\nGelieve contact op te nemen met Seppe Cardoen\nmeestal na of voor chiro eens naar deze persoon\nmail: seppecardoen46@gmail.com of Tel: 0475 40 17 28`);
    }
}