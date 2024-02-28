const setup = () => {
    window.addEventListener("load", () => {
        document.querySelectorAll(".belangrijk").forEach(paragraaf => {
            paragraaf.classList.add("opvallend");
        });
    });
};

document.addEventListener("DOMContentLoaded", setup);
