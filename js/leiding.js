import Persoon from "./persoon.js";

document.onkeydown = (evt) => {
  if (evt.ctrlKey && evt.key === "q") {
    alert("je gaat sluiten");
    window.close();
  }
};

let leiding = [["Seppe", "Cedric", "Yentl", "Wout"]];

const leiding2 = {
  SpeelclubMeisjes: [
    new Persoon(
      "Julie Vantomme",
      `email: <a href="mailto:Julie-vantomme@outlook.com">Julie-vantomme@outlook.com</a><br>Tel: 0472 94 40 07`
    ),
    new Persoon(
      "Lotte Vandewalle",
      `email: <a href:"mailto:Lottevandewalle2008@gmail.com">Lottevandewalle2008@gmail.com</a><br>Tel: 0474 90 17 13`
    ),
    new Persoon(
      "Eline Acke",
      `email: <a href:"mailto:Eline.acke@icloud.com">Eline.acke@icloud.com</a><br>Tel: 0471 51 79 08`
    ),
    new Persoon(
      "Luna Feys",
      `email: <a href:"mailto:luna.feys@icloud.com">luna.feys@icloud.com</a><br>Tel: 0488 99 30 88`
    )
  ],
  SpeelclubJongens: [
    new Persoon(
      "Ruben Perneel",
      `email: <a href="mailto:Perneelruben1@gmail.com">Perneelruben1@gmail.com</a><br>Tel: 0477 18 69 12`
    ),
    new Persoon(
      "Rhune Bouckaert",
      `email: <a href="mailto:Bouckaert.rhune@gmail.com">Bouckaert.ruhne@gmail.com</a><br>Tel: 0478 74 71 13`
    ),
    new Persoon(
      "Hasse Fiers",
      `email: <a href="mailto:Hassefiers@gmail.com">Hassefiers@gmail.com</a><br>Tel: 0467 02 44 93`
    )
  ],
  Kwiks: [
    new Persoon(
      "Femke Soenen",
      `email: <a href="mailto:Soenenfemke@gmail.com">Soenenfemke@gmail.com</a><br>Tel: 0456 10 90 75`
    ),
    new Persoon(
      "Jana Pype",
      `email: <a href="mailto:J.pype@hotmail.com">J.pype@hotmail.com</a><br>Tel: 0476 02 34 39`
    ),
    new Persoon(
      "Noor Tempelaere",
      `email: <a href="mailto:noor.tempelaere@hotmail.com">noor.tempelaere@hotmail.com</a><br>Tel: 0493 34 26 23`
    )
  ],
  Rakkers: [
    new Persoon(
      "Cedric France",
      `email: <a href="mailto:cedricfrance3@gmail.com">cedricfrance3@gmail.com</a><br>Tel: 0476 70 01 34`
    ),
    new Persoon(
      "Ferre Fiers",
      `email: <a href="mailto:Ferrefiers@gmail.com">Ferrefiers@gmail.com</a><br>Tel: 0467 01 97 15`
    )
  ],
  Toppers: [
    new Persoon(
      "Karel Crabbe",
      `email: <a href="mailto:Karel.crabbe2006@gmail.com">Karel.crabbe2006@gmail.com</a><br>Tel: 0470 77 14 16`
    ),
    new Persoon(
      "Yentl Willaert",
      `email: <a href="mailto:yentlwillaertfcb@gmail.com">yentlwillaertfcb@gmail.com</a><br>Tel: 0477 36 21 28`
    )
  ],
  Tippertiens: [
    new Persoon(
      "Flore Vanwildemeersch",
      `email: <a href="mailto:florevwdm@gmail.com">florevwdm@gmail.com</a><br>Tel: 0468 33 85 46`
    ),
    new Persoon(
      "Louise Deprez",
      `email: <a href="mailto:louise.deprezz@gmail.com">louise.deprezz@gmail.com</a><br>Tel: 0468 33 84 67`
    )
  ],
  Kerels: [
    new Persoon(
      "Stanny Bondue",
      `email: <a href="mailto:stannybondue@gmail.com">stannybondue@gmail.com</a><br>Tel: 0472 77 95 17`
    ),
    new Persoon(
      "Wout Demeester",
      `email: <a href="mailto:wout.demeester5@gmail.com">wout.demeester5@gmail.com</a><br>Tel: 0492 45 65 38`
    ),
    new Persoon(
      "Seppe Cardoen",
      `email: <a href="mailto:seppecardoen46@gmail.com">seppecardoen46@gmail.com</a><br>Tel: 0475 40 17 28`
    ),
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
    if (pers.naam.toLowerCase() === "siebe thevelein") {
      img.src = "images/leiding/siebe t.png";
    } else if (pers.naam.toLowerCase() === "siebe vandenbrande") {
      img.src = "images/leiding/siebe vdb.png";
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
