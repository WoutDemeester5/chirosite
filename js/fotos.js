// const foto = document.getElementById("speelclub");
// foto.onclick = () => {
//     let code = prompt("Geef code in!!");
//     if(code === "12345"){
//         const link = document.createElement('a');
//         link.href = "fotos/Chiro.zip"
//         link.download = "kampfotos.zip";
//         link.click();
//     }
// }

const fotos = document.querySelectorAll("img");

fotos.forEach(e => {
    e.onclick = () => {
        let code = prompt("Geef code in!!");
        if(code === "chirokampwrb24fotos"){
        alert("ok");
        switch(e.id){
            case "speelclub":
                window.open("https://drive.google.com/drive/folders/11cPciVrqsFip9vX1EMBGiEJ8-F7zCfO0?usp=drive_link","_blank");
                break;
            case "rakkers":
                window.open("https://drive.google.com/drive/folders/14UVyQyI0Cw3Eu9aThJsOVVjWU8E4PSKH?usp=sharing","_blank");
                break;
            case "toppers":
                window.open("https://drive.google.com/drive/folders/1xyIDjSheQuqhexaRgpiv2bthcfRePlX8?usp=sharing","_blank");
                break;
            case "kerels":
                window.open("https://drive.google.com/drive/folders/11YfL-0D4KoztcHoPSwt5U2HqWeV-WmOm?usp=sharing","_blank");
                break;
            case "leiding-jongens":
                window.open("https://drive.google.com/drive/folders/1b3DzGv_De9EcMuEtBZ7L4PYE6o86HyIG?usp=sharing","_blank");
                break;
            case "koks":
                window.open("https://drive.google.com/drive/folders/1YX-HkUrE27Hn0cG7LEXMsr2p9l5bb9-M?usp=sharing","_blank");
                break;
            case "sfeer":
                window.open("https://drive.google.com/drive/folders/1pL-S0IIvhSG2FWPkp5-albw6NqTwgh7m?usp=sharing","_blank");
                break;
            case "speelclub-meisjes":
                //window.location.href = "https://photos.app.goo.gl/PEYHP7KQHB4vetS97";
                window.open("https://photos.app.goo.gl/PEYHP7KQHB4vetS97","_blank");
                break;
            case "kwiks":
                //window.location.href = "https://photos.app.goo.gl/4kueheP3bsKUwHN7A";
                window.open("https://photos.app.goo.gl/4kueheP3bsKUwHN7A","_blank");
                break;
            case "tippers":
                //window.location.href = "https://photos.app.goo.gl/VU6vFBdexAxugvCd6";
                window.open("https://photos.app.goo.gl/VU6vFBdexAxugvCd6","_blank");
                break;
            case "tiptiens":
                //window.location.href = "https://photos.app.goo.gl/fzPjKRzQtTB9HgWh8";
                window.open("https://photos.app.goo.gl/fzPjKRzQtTB9HgWh8","_blank");
                break;
            case "leiding-meisjes":
                window.open("https://photos.app.goo.gl/bxkJAyqs6Cpz7XUM7","_blank");
                break;
        }
        }else{
            alert("foutieve code");
        }
    }
})