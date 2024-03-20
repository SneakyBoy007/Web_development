
const setup = () => {
    document.getElementById("knop").addEventListener("click", uitvoeren);
}

const uitvoeren = () => {

    let listItems = document.querySelectorAll('li');
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].classList.add('listitem');
    }

    let styleTag = document.createElement('style');
    styleTag.textContent = '.listitem { color: red; }';
    document.head.appendChild(styleTag);

    navigator.mediaDevices.getUserMedia({ video: true }) // Request access to webcam
        .then(stream => {
            let videoElement = document.createElement('video');
            videoElement.srcObject = stream;
            videoElement.autoplay = true;
            document.getElementById('webcamContainer').appendChild(videoElement);
        })
        .catch(error => {
            console.error('Error accessing webcam:', error);
            let defaultImage = document.createElement('img');
            defaultImage.setAttribute("src","https://www.visualworkplace.nl/static/upload/full/ff50dd83-d1a4-260f-f339-c6c0473621b3/Blauw.jpg")
            defaultImage.style.width = '50%';
            document.getElementById('webcamContainer').appendChild(defaultImage);
        });
}

window.addEventListener("load", setup);
