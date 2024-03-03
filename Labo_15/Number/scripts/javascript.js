const setup = () => {
    window.addEventListener("load", () => {
        document.getElementById("herberekenBtn").addEventListener("click", herbereken);
    });
};

const herbereken = () => {
    var tbody = document.getElementById("invoice").getElementsByTagName("tbody")[0];
    var rows = tbody.getElementsByTagName("tr");
    var totaal = 0;

    for (var i = 0; i < rows.length; i++) {
        var row = rows[i];
        var cells = row.getElementsByTagName("td");

        // Overslaan van de laatste rij
        if (i < rows.length - 1) {
            var prijs = parseFloat(cells[1].textContent);
            var aantal = parseInt(cells[2].getElementsByTagName("input")[0].value);
            var btw = parseFloat(cells[3].textContent) / 100;

            var subtotaal = (prijs * aantal) + (prijs * aantal) * btw;
            var totaalBedrag = subtotaal;

            cells[4].textContent = subtotaal.toFixed(2) + " Eur";

            totaal += totaalBedrag;
        }
    }

    document.getElementById("totaal").textContent = totaal.toFixed(2) + " Eur";
};

window.addEventListener("load", setup);
