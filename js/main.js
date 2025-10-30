// main.js
fetch("json/data.json")
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("dranken-container");
    const totaalSpan = document.getElementById("totaalbedrag");
    let alleInputs = [];

    // functie om het totale bedrag bij te werken
    const updateTotaal = () => {
      let totaal = 0;
      alleInputs.forEach(obj => {
        const aantal = parseFloat(obj.input.value) || 0;
        totaal += aantal * obj.prijs;
      });
      totaalSpan.textContent = totaal.toFixed(2);
    };

    // voor elke categorie uit het JSON-bestand
    data.dranken.forEach(categorie => {
      const title = document.createElement("h2");
      title.textContent = categorie.categorie;
      container.appendChild(title);

      const table = document.createElement("table");
      const header = `
        <tr>
          <th>Naam</th>
          <th>Prijs (€)</th>
          <th>Aantal</th>
          <th>Totaal (€)</th>
        </tr>`;
      table.innerHTML = header;

      categorie.items.forEach(item => {
        const row = document.createElement("tr");

        const naamCell = document.createElement("td");
        naamCell.textContent = item.naam;

        const prijsCell = document.createElement("td");
        prijsCell.textContent = item.prijs.toFixed(2);

        const aantalCell = document.createElement("td");
        const wrapper = document.createElement("div");
        wrapper.classList.add("aantal-wrapper");

        // min-knop
        const minusBtn = document.createElement("button");
        minusBtn.textContent = "-";

        // inputveld
        const input = document.createElement("input");
        input.type = "number";
        input.min = 0;
        input.value = 0;

        // plus-knop
        const plusBtn = document.createElement("button");
        plusBtn.textContent = "+";

        // logica knoppen
        plusBtn.addEventListener("click", () => {
          input.value = parseInt(input.value || 0) + 1;
          input.dispatchEvent(new Event("input"));
        });

        minusBtn.addEventListener("click", () => {
          const nieuw = Math.max(0, parseInt(input.value || 0) - 1);
          input.value = nieuw;
          input.dispatchEvent(new Event("input"));
        });

        // samenvoegen
        wrapper.appendChild(minusBtn);
        wrapper.appendChild(input);
        wrapper.appendChild(plusBtn);
        aantalCell.appendChild(wrapper);

        const totaalCell = document.createElement("td");
        totaalCell.textContent = "0.00";

        input.addEventListener("input", () => {
          const aantal = parseFloat(input.value) || 0;
          const itemTotaal = aantal * item.prijs;
          totaalCell.textContent = itemTotaal.toFixed(2);
          updateTotaal();
        });

        row.appendChild(naamCell);
        row.appendChild(prijsCell);
        row.appendChild(aantalCell);
        row.appendChild(totaalCell);
        table.appendChild(row);

        // voeg input toe aan de lijst voor het totaal
        alleInputs.push({ input: input, prijs: item.prijs });
      });

      container.appendChild(table);
    });

      // na alle tabellen zijn aangemaakt:
    const resetButton = document.getElementById("reset-button");

    resetButton.addEventListener("click", () => {
    // bouw overzicht van de bestelling
    let overzicht = "Overzicht bestelling:\n\n";
    alleInputs.forEach(obj => {
        const aantal = parseFloat(obj.input.value) || 0;
        if (aantal > 0) {
            const row = obj.input.closest("tr");
            const naam = row.querySelector("td:first-child").textContent;
            const totaal = aantal * obj.prijs;
            overzicht += `${naam}: ${aantal}\n`;
        }
    });

    overzicht += `\nTotaal: €${totaalSpan.textContent}`;

    // vraag bevestiging met overzicht
    const bevestigen = confirm(overzicht + "\n\nWil je naar volgende bestelling?");
    if (!bevestigen) return; // als de gebruiker annuleert, stop

    // zet alle inputs terug op 0
    alleInputs.forEach(obj => {
        obj.input.value = 0;
        const row = obj.input.closest("tr");
        const totaalCell = row.querySelector("td:last-child");
        totaalCell.textContent = "0.00";
    });

    // totaalbedrag resetten
    totaalSpan.textContent = "0.00";
    });


  })
  .catch(error => {
    console.error("Fout bij het laden van de JSON:", error);
  });


