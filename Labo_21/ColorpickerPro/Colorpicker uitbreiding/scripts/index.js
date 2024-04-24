const setup = () => {
    let sliders = document.getElementsByClassName("slider");

    for (let slider of sliders){
        slider.addEventListener("change", update);
        slider.addEventListener("input", update);
    }

    document.getElementById("input_button_save").addEventListener("click", store);

    // Herstel de instellingen bij het laden van de pagina
    restoreSettings();
    restoreSwatches();

    update();
}

const update = () => {
    let colors = ["r", "g", "b"];
    let sliders = {};
    let labels = {};
    let values = {};
    for (let color of colors) {
        sliders[color] = document.getElementById(`color_${color}`);
        values[color] = sliders[color].value;
        labels[color] = document.getElementById(`label_${color}`);
        labels[color].textContent = values[color];
    }
    let swatch = document.getElementById("swatch");

    swatch.style.backgroundColor = `rgb(${values["r"]}, ${values["g"]}, ${values["b"]})`;

    saveSettings();
}

const store = () => {
    let new_background_color = document.getElementById("swatch").style.backgroundColor;
    let element = document.importNode(document.getElementById("template_stored_swatch").content, true).firstElementChild;

    element.style.backgroundColor = new_background_color;
    element.addEventListener("click", restore);
    element.getElementsByClassName("input_button_remove")[0].addEventListener("click", remove);

    document.getElementById("stored_container").appendChild(element);

    // Bewaar de huidige instellingen in localStorage

    // Bewaar de huidige swatches in localStorage
    saveSwatches();
}

const restore = (event) => {
    let background_color = event.currentTarget.style.backgroundColor;
    let background_colors = background_color.match(/\d+/g);
    let colors = ["r", "g", "b"];

    for (let i = 0; i < background_colors.length; ++i) {
        document.getElementById(`color_${colors[i]}`).value = background_colors[i];
    }

    update();

    event.stopPropagation();
}

const remove = (event) => {
    event.currentTarget.parentElement.remove()

    event.stopPropagation();

    saveSwatches();
}

const saveSettings = () => {
    let sliders = document.getElementsByClassName("slider");
    let settings = {};

    for (let slider of sliders) {
        settings[slider.id] = slider.value;
    }

    localStorage.setItem("sliderSettings", JSON.stringify(settings));
}

const restoreSettings = () => {
    let savedSettings = localStorage.getItem("sliderSettings");

    if (savedSettings) {
        savedSettings = JSON.parse(savedSettings);

        for (let sliderId in savedSettings) {
            document.getElementById(sliderId).value = savedSettings[sliderId];
        }
    }
}

const saveSwatches = () => {
    let swatches = document.getElementsByClassName("stored_swatch");
    let swatchColors = [];

    for (let swatch of swatches) {
        swatchColors.push(swatch.style.backgroundColor);
    }

    localStorage.setItem("swatchColors", JSON.stringify(swatchColors));
}

const restoreSwatches = () => {
    let savedSwatches = localStorage.getItem("swatchColors");

    if (savedSwatches) {
        savedSwatches = JSON.parse(savedSwatches);

        for (let color of savedSwatches) {
            let element = document.importNode(document.getElementById("template_stored_swatch").content, true).firstElementChild;

            element.style.backgroundColor = color;
            element.addEventListener("click", restore);
            element.getElementsByClassName("input_button_remove")[0].addEventListener("click", remove);

            document.getElementById("stored_container").appendChild(element);
        }
    }
}

window.addEventListener("load", setup);
