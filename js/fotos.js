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
        if(code === "chiro26picturesoudsbergen"){
        alert("ok");
        switch(e.id){
            case "speelclub":
                window.open("https://drive.google.com/drive/folders/1IbCwOG7avicsKGWl_Yv_fQrC7CC73hye?usp=sharing","_blank");
                break;
            case "rakkers":
                window.open("https://drive.google.com/drive/folders/1ftjt57aEgbH2W2itaJg-UOCBlBK47onV?usp=sharing","_blank");
                break;
            case "toppers":
                window.open("https://drive.google.com/drive/folders/1b4WmdlOy7WQgLquHG1Tb0G7h6onbBpGZ?usp=sharing","_blank");
                break;
            case "kerels":
                window.open("https://drive.google.com/drive/folders/1vpNREcwEtjP87QYXCzNiGVm5qcV2ODlT?usp=sharing","_blank");
                break;
            case "leiding-jongens":
                window.open("https://drive.google.com/drive/folders/1EEIv9TJ1LWdV1vFUDhlBTxRDOSQCXPQC?usp=sharing","_blank");
                break;
            case "sfeer":
                window.open("https://drive.google.com/drive/folders/13JD2mIR4C744XLT6-ULDYSiwbF8Fh128?usp=sharing","_blank");
                break;
            case "koks":
                window.open("https://drive.google.com/drive/folders/1rGiJmQxGF0VeZ4WRGah-Bzkc2pIE7pY9?usp=sharing","_blank");
                break;
            case "kamptoneeltje":
                window.open("https://drive.google.com/drive/folders/1QLhTot7zDt3On4HM4N1AtpTACGmD9rzo?usp=sharing","_blank");
                break;
            case "speelclub-meisjes":
                //window.location.href = "https://photos.app.goo.gl/PEYHP7KQHB4vetS97";
                window.open("https://photos.google.com/share/AF1QipOeTRmT1ChbqU2f8YTZur79CyFvGBqPvmSmTB6qNfuoBwLk8ubE6ilUajcjGSMoRw?key=VV9HcFNhMTMxdTlmWG04OFVLRDMyUXhzM1J2cGR3","_blank");
                break;
            case "kwiks":
                //window.location.href = "https://photos.app.goo.gl/4kueheP3bsKUwHN7A";
                window.open("https://photos.google.com/share/AF1QipOBP6WSPM_JVx0qlCbQQLj3Ub_3L2KV9d-6tOA8dLB3JdwkdxiTLBZugGoMGk3_nw?key=d1pQQ0U1dTZ1MGxNb2RHNEZlU3Jfc1BCVm1Jak53","_blank");
                break;
            case "tippertiens":
                //window.location.href = "https://photos.app.goo.gl/VU6vFBdexAxugvCd6";
                window.open("https://photos.google.com/share/AF1QipNOL20QzoNLSHvfZkM2YvPmRS8ou-F1Vrk_gFGdyBOuyDC-yX1dWXfq0uG8_5pBKQ?key=QmNhYThzMlFobkVUeFZmU05pMVdDMkpUTW5Wcl9R","_blank");
                break;
            case "leiding-meisjes":
                window.open("https://photos.google.com/share/AF1QipN-5spt90tUVdlI9kyK6aNLWkKuTfzWdCtCU00sUMReZ8pGdailZ1JS-JybeWQuNA?key=eVc4ZWZJaHViQUNHeGNYZkZXU1Q4TkRfdm13T3JR","_blank");
                break;
        }
        }else{
            alert("foutieve code");
        }
    }
})