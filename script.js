const video = document.getElementById('video');
const button = document.getElementById('btn');

async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia(); 
        video.srcObject = mediaStream;
        video.onloadedmetadata = () => {
            video.play();
        }
    }

    catch (err) {
    }
}

button.addEventListener('click', async () => {
    button.disabled = true;

    await video.requestPictureInPicture();
    button.disabled = false;

});

selectMediaStream();
