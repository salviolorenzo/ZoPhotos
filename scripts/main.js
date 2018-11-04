// logic for dynamically changing featured images
const featured = document.querySelector('[data-featured]');
// add photos to this list to create a new image object

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

// featuredImages.forEach(function () {
//     createCard();
//     index++;
// });

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