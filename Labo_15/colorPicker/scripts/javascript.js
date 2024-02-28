const updateColor = () => {
    const redSlider = document.getElementById('red-slider');
    const greenSlider = document.getElementById('green-slider');
    const blueSlider = document.getElementById('blue-slider');
    const colorBox = document.getElementById('color-box');
    const rgbValues = document.getElementById('rgb-values');

    const redValue = redSlider.value;
    const greenValue = greenSlider.value;
    const blueValue = blueSlider.value;

    const colorString = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
    colorBox.style.backgroundColor = colorString;
    rgbValues.textContent = `RGB: ${redValue}, ${greenValue}, ${blueValue}`;
}

const setup = () => {
    const redSlider = document.getElementById('red-slider');
    const greenSlider = document.getElementById('green-slider');
    const blueSlider = document.getElementById('blue-slider');

    // Voeg event listeners toe aan de sliders
    redSlider.addEventListener('input', updateColor);
    greenSlider.addEventListener('input', updateColor);
    blueSlider.addEventListener('input', updateColor);

    // Initialiseer de kleur
    updateColor();
}

window.addEventListener("load", setup);
