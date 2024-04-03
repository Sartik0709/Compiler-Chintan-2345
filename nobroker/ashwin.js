
let container_Ashwin = document.getElementById("card_container");

let cards; // Define cards globally
let slideIndex = 0; // Initialize slideIndex

async function fetchData(url) {
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log(data);
        appendData(data);
        showSlides();

    } catch (error) {
        console.log(error);
    }
}
fetchData(`http://localhost:3000/card_Data`);

function createCard(item) {
    let card = document.createElement("div");
    card.className = "card";

    let image = document.createElement("img")
    image.src = item.image
    image.className = "card-image";

    let name = document.createElement("p");
    name.innerText = item.name;
    name.className = "name";

    let rating = document.createElement("p");
    rating.className = "rating";
    rating.innerText = `${'★'.repeat(item.rating)}`;

    let review = document.createElement("h4")
    review.className = "review";
    review.innerText = item.review;

    let description = document.createElement("p")
    description.innerText = `"${item.description}"`;

    let flexImgName = document.createElement("div");
    flexImgName.className = "flexImgName";

    let flexImg = document.createElement("div")
    flexImg.append(image)

    let nameRating = document.createElement("div")
    nameRating.append(name, rating)

    flexImgName.append(flexImg, nameRating)

    card.append(flexImgName, review, description);

    return card;

}

function appendData(data) {
    container_Ashwin.innerHTML = "";
    cards = data.map(createCard); // Assign cards globally
    cards.forEach((card, index) => {
        container_Ashwin.append(card);
        if (index < 3) {
            card.classList.add('active'); // Display the first three cards initially
        }
    });
}

function showSlides() {
    let visibleCards = document.querySelectorAll('.card.active');
    visibleCards.forEach(card => {
        card.classList.remove('active');
    });

    for (let i = slideIndex; i < slideIndex + 3; i++) {
        if (i < cards.length) {
            cards[i].classList.add('active');
        }
    }
}

function changeSlide(direction) {
    slideIndex += direction;
    if (slideIndex < 0) {
        slideIndex = 0;
    } else if (slideIndex > cards.length - 3) {
        slideIndex = cards.length - 3;
    }
    showSlides();
}
