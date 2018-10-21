// logic for dynamically changing featured images
const featured = document.querySelector('[data-featured]');
// add photos to this list to create a new image object
const featuredImages = [
    {
        'name': 'luxembourgGarden',
        'src': '../images/image77.jpg',
        'caption': 'Luxembourg Garden, Paris, France // August 16, 2018 10:58 a.m.',
        'link': "https://www.google.com/maps/place/Marie+De+Medicis+Fountain/@48.8480604,2.3385868,18z/data=!4m5!3m4!1s0x47e671dc92377a55:0x67d6057607646f7c!8m2!3d48.8480528!4d2.3393268",
    },
    {
        'name': 'laVillete',
        'src': '../images/image84.jpg',
        'caption': 'La Villete Park, Paris, France // August 15, 2018  4:36 p.m.',
        'link': "https://www.google.com/maps/place/Faleh+Alaeddine/@48.8912705,2.3860968,19z/data=!3m1!4b1!4m5!3m4!1s0x47e66dcc0ffd0243:0x10ff49b5ca4b8d6a!8m2!3d48.8912705!4d2.3860968",
    },
    {
        'name': 'eiffelTower',
        'src': '../images/image43.jpg',
        'caption': 'Eiffel Tower, seen from Bateau Mouche, Seine River, Paris, France // August 14, 2018 4:20 p.m.',
        'link': "https://www.google.com/maps/place/48%C2%B051'26.1%22N+2%C2%B017'19.8%22E/@48.857247,2.28884,17z/data=!3m1!4b1!4m6!3m5!1s0x0:0x0!7e2!8m2!3d48.8572475!4d2.2888404",
    },
    {
        'name': 'malaquaisQuay',
        'src': '../images/image2.jpg',
        'caption': "Malaquais Quay, Paris, France // August 16, 2018 11:39 a.m.",
        'link': 'https://www.google.com/maps/place/Quai+Malaquais,+75006+Paris,+France/@48.8583758,2.3331343,18z/data=!4m5!3m4!1s0x47e66e2877673a37:0x5f38da7d537f6088!8m2!3d48.8583476!4d2.333115',
    },
]

let index = 0;
// creates the maps link
function createLink(imageArray) {
    let current = imageArray[index];
    let anchor = document.createElement('a');
    let icon = document.createElement('i');
    icon.classList.add('fas', 'fa-search-location');
    anchor.appendChild(icon);
    anchor.setAttribute('href', current['link']);
    return anchor;
}
// adds the caption
function createCaption(imageArray) {
    let current = imageArray[index];
    let caption = document.createElement('h4');
    caption.textContent = current['caption'];
    return caption;
}

function createImg(imageArray) {
    let current = imageArray[index];
    let img = document.createElement('img');
    img.setAttribute('src', current['src']);
    return img;
}

function createCard() {
    let card = document.createElement('div');
    card.classList.add('cards');
    card.appendChild(createImg(featuredImages));
    card.appendChild(createCaption(featuredImages));
    card.appendChild(createLink(featuredImages));

    featured.appendChild(card);
    return card;
}

featuredImages.forEach(function () {
    createCard();
    index++;
});

const grid = document.querySelector('[data-grid]');
const albumImages = grid.querySelectorAll('img');
const body = document.querySelector('body');
const container = document.querySelectorAll('.album-container');
const headers = document.querySelectorAll('h3');

function escapeButton() {
    let button = document.createElement('button');
    button.textContent = 'X'
    button.addEventListener('click', function () {
        let parent = button.parentNode;
        parent.parentNode.removeChild(parent);
    });
    return button;
}

function createBigImage(item) {
    let big = document.createElement('div');
    let bigImage = document.createElement('img');
    bigImage.setAttribute('src', item);
    big.classList.add('blown-up');
    big.appendChild(escapeButton());
    big.appendChild(bigImage);
    body.appendChild(big);
    return big;
}


for (item of albumImages) {
    item.addEventListener('click', function (event) {
        createBigImage(event.target.src);
    });
}