const page = document.querySelector('.page'),
qrInput = page.querySelector('.form input'),
generateBtn = page.querySelector('.form button'),
qrImg = page.querySelector('.qr-code .img');

generateBtn.addEventListener('click', () =>{
    let qrValue = qrInput.value;
    if(!qrValue){
        alert('Insira uma URL ou um texto para gerar um QR Code')
        return;
    }
    generateBtn.innerText = "Gerando um QR Code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrvalue}`;
    qrImg.addEventListener('load', () =>{
    generateBtn.innerText = "Gerar QR Code";
    page.classList.add('active') 
    });
});

qrInput.addEventListener('keyup', () =>{
    if(!qrInput.value){
        page.classList.remove('active');
    };
});