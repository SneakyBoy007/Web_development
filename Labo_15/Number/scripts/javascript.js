const setup = () => {
    window.addEventListener("load", () => {
        document.getElementById("herberekenBtn").addEventListener("click", herbereken);
    });
};

const herbereken = () => {
    var rows = document.querySelectorAll("#invoice tbody tr");
    var totaal = 0;

    rows.forEach(function(row, index) {
        // Overslaan van de laatste rij (index 0-based)
        if (index < rows.length - 1) {
            var prijs = parseFloat(row.querySelector(".prijs").textContent);
            var aantal = parseInt(row.querySelector(".aantal").value);
            var btw = parseFloat(row.querySelector(".btw").textContent) / 100;

            var subtotaal = (prijs * aantal)+(prijs * aantal)*btw;
            var totaalBedrag = subtotaal;

            row.querySelector(".subtotaal").textContent = subtotaal.toFixed(2) + " Eur";

            totaal += totaalBedrag;
        }
    });

    document.getElementById("totaal").textContent = totaal.toFixed(2) + " Eur";
};

window.addEventListener("load", setup);
