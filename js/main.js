// main.js
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const container = document.getElementById("dranken-container");
    const totaalSpan = document.getElementById("totaalbedrag");
    let alleInputs = [];

    // functie om het totale bedrag bij te werken
    const updateTotaal = () => {
      let totaal = 0;
      alleInputs.forEach((obj) => {
        const aantal = parseFloat(obj.input.value) || 0;
        totaal += aantal * obj.prijs;
      });
      totaalSpan.textContent = totaal.toFixed(2);
    };

    // voor elke categorie uit het JSON-bestand
    data.dranken.forEach((categorie) => {
      const title = document.createElement("h2");
      title.textContent = categorie.categorie;
      title.classList.add("categorie-titel");

      const table = document.createElement("table");
      table.style.display = "none"; // standaard ingeklapt

      // klik-logica voor slechts één open categorie
      title.addEventListener("click", () => {
        const isOpen = table.style.display === "table";

        // sluit ALLE categorieën
        document.querySelectorAll("table").forEach((t) => {
          t.style.display = "none";
        });

        document.querySelectorAll(".categorie-titel").forEach((titel) => {
          titel.classList.remove("open");
        });

        // open alleen de aangeklikte (als die nog niet open was)
        if (!isOpen) {
          table.style.display = "table";
          title.classList.add("open");
        }
      });

      container.appendChild(title);
      container.appendChild(table);

      // const title = document.createElement("h2");
      // title.textContent = categorie.categorie;
      // container.appendChild(title);

      //const table = document.createElement("table");
      const header = `
        <tr>
          <th>Naam</th>
          <th>Prijs (€)</th>
          <th>Aantal</th>
          <th>Totaal (€)</th>
        </tr>`;
      table.innerHTML = header;

      categorie.items.forEach((item) => {
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

      // container.appendChild(table);
    });

    // na alle tabellen zijn aangemaakt:
    const resetButton = document.getElementById("reset-button");

    resetButton.addEventListener("click", () => {
      // bouw overzicht van de bestelling
      let overzicht = "Overzicht bestelling:\n\n";
      let bestelling = [];
      alleInputs.forEach((obj) => {
        const aantal = parseFloat(obj.input.value) || 0;
        if (aantal > 0) {
          const row = obj.input.closest("tr");
          const naam = row.querySelector("td:first-child").textContent;
          const totaal = aantal * obj.prijs;
          bestelling.push({
            product: naam,
            quantity: aantal,
          });
        }
      });

      bestelling.forEach((item) => {
        overzicht += `${item.product}: ${item.quantity}\n`;
      });

      overzicht += `\nTotaal: €${totaalSpan.textContent}`;

      // vraag bevestiging met overzicht
      const bevestigen = confirm(
        overzicht + "\n\nWil je de bestelling doorsturen naar bar?",
      );
      if (!bevestigen) return; // als de gebruiker annuleert, stop

      fetch("save-order.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: bestelling,
          total: totaalSpan.textContent,
        }),
      })
        .then((res) => {
          if (!res.ok) throw new Error("HTTP error " + res.status);
          return res.json();
        })
        .then((data) => {
          console.log("Server response:", data);
          if (!data.success) {
            alert("Fout bij opslaan: " + data.error);
          } else {
            alert("Bestelling opgeslagen! Order ID: " + data.order_id);
          }
        })
        .catch((err) => {
          console.error("Fetch error:", err);
          alert("Netwerkfout: " + err.message);
        });

      // zet alle inputs terug op 0
      alleInputs.forEach((obj) => {
        obj.input.value = 0;
        const row = obj.input.closest("tr");
        const totaalCell = row.querySelector("td:last-child");
        totaalCell.textContent = "0.00";
      });

      // totaalbedrag resetten
      totaalSpan.textContent = "0.00";
    });
  })
  .catch((error) => {
    console.error("Fout bij het laden van de JSON:", error);
  });
