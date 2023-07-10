const head = document.head || document.getElementsByTagName('head')[0];

const profilePicture = document.getElementsByClassName('profile_picture_img');

const styleLink = document.createElement('link');
styleLink.rel = 'stylesheet';

function addStylesheet(url) {
    styleLink.href = url;
    head.appendChild(styleLink);
}

function removeStylesheet() {
    if (styleLink.parentNode) {
        styleLink.parentNode.removeChild(styleLink);
    }
}

function handleScreenWidthChange() {
    if (window.innerWidth < 768) {
        addStylesheet('styles/mobile.css');
    } else {
        addStylesheet('styles/desktop.css');
    }
}

window.addEventListener('resize', handleScreenWidthChange);

window.addEventListener('onload', () => {

})

handleScreenWidthChange();

window.onload = () => profilePicture[0].src ='./public/profile_picture.jpg'
