function selectBgImage(){
    const randomNum = Math.floor(Math.random() * 12);
    const imgPath = `url('./img/${randomNum}.jpg')`;
    document.body.style.backgroundImage = imgPath;
}

selectBgImage();
setInterval(selectBgImage, 10000);