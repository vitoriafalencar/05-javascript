const seletor = document.getElementById('selector')
const button = document.getElementById('btn')
const image = document.getElementById('image')

button.addEventListener('click',getimage)
function getimage(){
    const  option = seletor.value
    console.log(option)

    switch (option) {
        case 'ipad':
            image.setAttribute('src','./img/ipad-aple.jpg')
            break;

        case 'iphone':
            image.setAttribute('src','./img/iphone-aple.jpg')
            break;

            case 'macbook':
                image.setAttribute('src','./img/macbook-apple.jpg')
            break;

            case 'oculos':
                image.setAttribute('src','./img/oculos-apple.jpg')
        default:
            break;
    }
}
