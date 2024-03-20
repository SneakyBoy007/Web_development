const setup = () => {
    show_image();
}

const show_image = () => {
    let shown_image = document.getElementsByClassName("shown_image")[0];

    if (shown_image) {
        shown_image.classList.remove("shown_image");
        shown_image.classList.add("hidden_image");
    }

    let selected_number = document.getElementById("image_selector").value;
    let images = document.getElementsByClassName("hidden_image");

    for (let image of images) {
        if (image.src.endsWith(`/${selected_number}.png`)) {
            image.classList.remove("hidden_image");
            image.classList.add("shown_image");
        }
    }
}

window.addEventListener("load", setup);
