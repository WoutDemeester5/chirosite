import Persoon from "./persoon.js";

document.onkeydown = (evt) => {
  if (evt.ctrlKey && evt.key === "q") {
    alert("je gaat sluiten");
    window.close();
  } else if (evt.ctrlKey && evt.key === "d") {
    alert("je dikke moeder");
    window.close();
  }
};

let leiding = [["Seppe", "Cedric", "Yentl", "Wout"]];

const leiding2 = {
  SpeelclubMeisjes: [
    new Persoon(
      "Elien Hennebert",
      `email: <a href="mailto:elienhennebert@gmail.com">elienhennebert@gmail.com</a><br>Tel: 0493 18 99 88`
    ),
    new Persoon(
      "Noor Tempelaere",
      `email: <a href="mailto:noor.tempelaere@hotmail.com">noor.tempelaere@hotmail.com</a><br>Tel: 0493 34 26 23`
    )
  ],
  SpeelclubJongens: [
    new Persoon(
      "Gust Cool",
      `email: <a href="mailto:Gust.cool@telenet.be">Gust.cool@telenet.be</a><br>Tel: 0469 16 87 01`
    ),
    new Persoon(
      "Joppe Fiers",
      `email: <a href="mailto:joppe.fiers@gmail.com">joppe.fiers@gmail.com</a><br>Tel: 0467 01 96 75`
    ),
    new Persoon(
      "Warre Bouckaert",
      `email: <a href="mailto:warre.bouckaert10@gmail.com">warre.bouckaert10@gmail.com</a><br>Tel: 0468 31 18 86`
    ),
    new Persoon(
      "Seppe Cardoen",
      `email: <a href="mailto:seppecardoen46@gmail.com">seppecardoen46@gmail.com</a><br>Tel: 0475 40 17 28`
    ),
    new Persoon(
      "Thomas Deleu",
      `email: <a href="mailto:thomasdeleu0704@icloud.com">thomasdeleu0704@icloud.com</a><br>Tel:`
    )
  ],
  Kwiks: [
    new Persoon(
      "Flore Vanwildemeersch",
      `email: <a href="mailto:florevwdm@gmail.com">florevwdm@gmail.com</a><br>Tel: 0468 33 85 46`
    ),
    new Persoon(
      "Noor Pattyn",
      `email: <a href="mailto:noorpattyn11@gmail.com">noorpattyn11@gmail.com</a><br>Tel: 0467 05 10 60`
    )
  ],
  Rakkers: [
    new Persoon(
      "Rhune Bouckaert",
      `email: <a href="mailto:Bouckaert.rhune@gmail.com">Bouckaert.ruhne@gmail.com</a><br>Tel: 0478 74 71 13`
    ),
    new Persoon(
      "Thibe Bouckaert",
      `email: <a href="mailto:thibe.bouckaert@gmail.com">thibe.bouckaert@gmail.com</a><br>Tel: 0468 34 90 62`
    ),
    new Persoon(
      "Milan Feys",
      `email: <a href="mailto:milanfeys@icloud.com">milanfeys@icloud.com</a><br>Tel: 0469 13 15 95`
    ),
    new Persoon(
      "Lennert Beyens",
      `email: <a href="mailto:beyens.lennert@telenet.be">beyens.lennert@telenet.be</a><br>Tel: 0495 19 32 33`
    ),
    new Persoon(
      "Dawid Koczur",
      `email: <a href="mailto:dkoczur76@gmail.com">dkoczur76@gmail.com</a><br>Tel: 0469 13 08 81`
    )
  ],
  Tippers: [
    new Persoon(
      "Femke Soenen",
      `email: <a href="mailto:Soenenfemke@gmail.com">Soenenfemke@gmail.com</a><br>Tel: 0456 10 90 75`
    ),
    new Persoon(
      "Jana Pype",
      `email: <a href="mailto:J.pype@hotmail.com">J.pype@hotmail.com</a><br>Tel: 0476 02 34 39`
    )
  ],
  Toppers: [
    new Persoon(
      "Ferre Fiers",
      `email: <a href="mailto:Ferrefiers@gmail.com">Ferrefiers@gmail.com</a><br>Tel: 0467 01 97 15`
    ),
    new Persoon(
      "Yentl Willaert",
      `email: <a href="mailto:yentlwillaertfcb@gmail.com">yentlwillaertfcb@gmail.com</a><br>Tel: 0477 36 21 28`
    ),
    new Persoon(
      "Ruben Perneel",
      `email: <a href="mailto:Perneelruben1@gmail.com">Perneelruben1@gmail.com</a><br>Tel: 0477 18 69 12`
    ),
    new Persoon(
      "Bryan Deneut",
      `Tel: 0488 06 58 59`
    )
  ],
  Tiptiens: [
    new Persoon(
      "Lotte Vandewalle",
      `email: <a href="mailto:Lottevandewalle2008@gmail.com">Lottevandewalle2008@gmail.com</a><br>Tel: 0474 90 17 13`
    ),
    new Persoon(
      "Luna Feys",
      `email: <a href:"mailto:luna.feys@icloud.com">luna.feys@icloud.com</a><br>Tel: 0488 99 30 88`
    )
  ],
  Kerels: [
    new Persoon(
      "Karel Crabbe",
      `email: <a href="mailto:Karel.crabbe2006@gmail.com">Karel.crabbe2006@gmail.com</a><br>Tel: 0470 77 14 16`
    ),
    new Persoon(
      "Hasse Fiers",
      `email: <a href="mailto:Hassefiers@gmail.com">Hassefiers@gmail.com</a><br>Tel: 0467 02 44 93`
    ),
    new Persoon(
      "Ward Cool",
      `email: <a href="mailto:ward.stefaan.cool@gmail.com">ward.stefaan.cool@gmail.com</a><br>Tel: 0467 00 22 86`
    )
  ],
};

const detail = "email: chiro.westrozebeke@gmail.com\nTel: 0492 45 65 35";

// let divLeiding = document.getElementById('speelclub');

// for(let pers of leiding[0]){
//     divLeiding.insertAdjacentHTML('beforeend',`
//         <div class="item">
//             <img src="../images/${pers.toLowerCase()}.png">
//             <p>${pers}</p>
//         </div>
//         `);
// };

for (let leiding in leiding2) {
  for (let pers of leiding2[leiding]) {
    const divLeiding = document.getElementById(`${leiding.toLowerCase()}`);
    // const html = `
    //     <div class="item">
    //          <img src="../images/${pers.toLowerCase()}.png" id="${pers.toLowerCase()}">
    //          <p>${pers}</p>
    //          <p id="detail" class="invisible">${detail}</p>
    //     </div>
    //     `;
    // divLeiding.insertAdjacentHTML('beforeend',html);
    const div = document.createElement("div");
    div.setAttribute("class", "item");
    const img = document.createElement("img");
    if (pers.naam.toLowerCase() === "noor pattyn") { 
      img.src = "images/leiding/noorp.jpg";
    } else {
      img.src = `images/leiding/${pers.naam.toLowerCase().split(" ")[0]}.jpg`;
    }

    

    img.onerror = () => {
      img.src = "images/commingsoon.gif";
    };

    const pPersoon = document.createElement("p");
    pPersoon.innerText = `${pers.naam}`;
    const pDetails = document.createElement("p");
    pDetails.innerHTML = `${pers.details}`;
    pDetails.setAttribute("id", "detail");
    pDetails.setAttribute("class", "invisible");
    div.appendChild(img);
    div.appendChild(pPersoon);
    div.appendChild(pDetails);
    divLeiding.appendChild(div);

    div.onmouseenter = () => {
      pDetails.classList.toggle("invisible");
    };
    div.onmouseleave = () => {
      pDetails.classList.toggle("invisible");
    };
  }
}
