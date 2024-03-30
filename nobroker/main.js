let container = document.getElementById("card_container");

async function fetchData(url) {
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log(data);
        appendData(data);

    } catch (error) {
        console.log(error);
    }
}
fetchData(`http://localhost:3000/card_Data`);

function createCard(item) {
    let card = document.createElement("div");
    card.className = "card";

    let image = document.createElement("img");
    image.src = item.image;
    image.className = "card-image"; // Add quotes around class name

    let name = document.createElement("h3");
    name.innerText = item.name;

    let rating = document.createElement("p");
    rating.innerText = `Rating: ${item.rating}`;

    let review = document.createElement("h4");
    review.innerText = item.review;

    let description = document.createElement("p");
    description.innerText = item.description;

    card.append(image, name, rating, review, description);

    return card;
}

function appendData(data) {
    container.innerHTML = "";

    data.forEach((item) => {
        let card = createCard(item);
        container.append(card);
    });
}
