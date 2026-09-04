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
        if(code === "chiro25picturesopoeteren"){
        alert("ok");
        switch(e.id){
            case "speelclub":
                window.open("https://photos.app.goo.gl/3eshFqr188u7MKbb8","_blank");
                break;
            case "rakkers":
                window.open("https://photos.app.goo.gl/cfRRkoyFs4atytZk8","_blank");
                break;
            case "toppers":
                window.open("https://photos.app.goo.gl/dckjNaqYnc48Gxz39","_blank");
                break;
            case "kerels":
                window.open("https://photos.app.goo.gl/tGgGxAotkj2fu4Yn9","_blank");
                break;
            case "leiding-jongens":
                window.open("https://photos.app.goo.gl/5YPfBGnqPJHDsjk98","_blank");
                break;
            case "sfeer":
                window.open("https://photos.app.goo.gl/B59KrSybm5VYhsP56","_blank");
                break;
            case "speelclub-meisjes":
                //window.location.href = "https://photos.app.goo.gl/PEYHP7KQHB4vetS97";
                window.open("https://photos.app.goo.gl/QD7J4uGSsseTyqibA","_blank");
                break;
            case "kwiks":
                //window.location.href = "https://photos.app.goo.gl/4kueheP3bsKUwHN7A";
                window.open("https://photos.app.goo.gl/qWcpT1ofQVisrnYi8","_blank");
                break;
            case "tippertiens":
                //window.location.href = "https://photos.app.goo.gl/VU6vFBdexAxugvCd6";
                window.open("https://photos.app.goo.gl/4RAKM62F1Un3TAWM8","_blank");
                break;
            case "koks-meisjes":
                //window.location.href = "https://photos.app.goo.gl/fzPjKRzQtTB9HgWh8";
                window.open("https://photos.app.goo.gl/PDR6a6aEetG2hgRC7","_blank");
                break;
            case "leiding-meisjes":
                window.open("https://photos.app.goo.gl/bf2GGBcsMjgKnuLF8","_blank");
                break;
            case "sfeer-meisjes":
                window.open("https://photos.app.goo.gl/4p3w8c7dSVZyjZz47","_blank");
                break;
            case "Zusjes":
                window.open("https://photos.app.goo.gl/Am315hgksjZ7Dteg7","_blank");
                break;
        }
        }else{
            alert("foutieve code");
        }
    }
})