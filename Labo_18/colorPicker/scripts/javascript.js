const updateColor = () => {
    const redSlider = document.getElementById('red-slider');
    const greenSlider = document.getElementById('green-slider');
    const blueSlider = document.getElementById('blue-slider');
    const colorBox = document.getElementById('color-box');
    const rgbValues = document.getElementById('rgb-values');
    const red = document.getElementById("red-value");
    const green = document.getElementById("green-value");
    const blue = document.getElementById("blue-value");



    const redValue = redSlider.value;
    const greenValue = greenSlider.value;
    const blueValue = blueSlider.value;

    const colorString = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
    colorBox.style.backgroundColor = colorString;
    rgbValues.textContent = `RGB: ${redValue}, ${greenValue}, ${blueValue}`;
    red.textContent =`Red: ${redValue}`;
    green.textContent =`Green: ${greenValue}`;
    blue.textContent = `Blue: ${blueValue}`;
}

const setup = () => {
    const redSlider = document.getElementById('red-slider');
    const greenSlider = document.getElementById('green-slider');
    const blueSlider = document.getElementById('blue-slider');
    const saveButton = document.getElementById('save-button');
    const swatchContainer = document.getElementById('swatch-container');

    redSlider.addEventListener('input', updateColor);
    greenSlider.addEventListener('input', updateColor);
    blueSlider.addEventListener('input', updateColor);

    saveButton.addEventListener('click', () => {
        addSwatch(redSlider.value, greenSlider.value, blueSlider.value);
    });

    updateColor(); // Bij het opzetten, de kleur bijwerken
}

const addSwatch = (red, green, blue) => {
    const swatchContainer = document.getElementById('swatch-container');

    const swatch = document.createElement('div');
    swatch.classList.add('swatch');
    swatch.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.textContent = 'X';

    deleteButton.addEventListener('click', () => {
        swatch.remove();
    });

    swatch.appendChild(deleteButton);

    swatchContainer.appendChild(swatch);

    swatch.addEventListener('click', () => {
        document.getElementById('red-slider').value = red;
        document.getElementById('green-slider').value = green;
        document.getElementById('blue-slider').value = blue;
        updateColor(); // Bij het selecteren van een swatch, de kleur bijwerken
    });
}

window.addEventListener("load", setup);
