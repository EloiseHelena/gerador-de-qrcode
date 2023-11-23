const inputValue = document.querySelector('#inputValue');
const btnValue = document.querySelector('#btnValue');
const imgQrCode = document.querySelector('#imgQrCode');
const page = document.querySelector('.page');
let valueDefault;

// https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example 

btnValue.addEventListener('click', () => {
    let qrcodeValue = inputValue.value.trim();  
    if(!qrcodeValue) {
        alert("Insira uma url ou texto para gerar o QR Code")
    return;
    }
    
    valueDefault = qrcodeValue;
    btnValue.innerText = 'Gerando QR Code...'
    imgQrCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${valueDefault}`
    imgQrCode.addEventListener('load', () => {
        page.classList.add('active');
        btnValue.innerText = 'Gerar QRCode'
    })
})
