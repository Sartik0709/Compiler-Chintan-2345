// pay-rent-sartik js 
let rent_container = document.getElementById("pay-for-rent");

let h2_h = document.createElement("h2");
h2_h.innerText = "Pay Rent and Fees with Credit Card";
rent_container.append(h2_h);

let datacd = `https://compiler-chintan-2345.onrender.com/rashi_payforrent`;

function createcard(detail) {
    let card = document.createElement("div");
    let card_img = document.createElement("div");
    let img = document.createElement("img");
    let card_body = document.createElement("div");
    let card_hading = document.createElement("h5");
    let card_title = document.createElement("p");
    let card_link = document.createElement("a");
    console.log("hiii");
    card.className = "card";
    card_img.className = "card_img";
    img.src = detail.image;
    img.alt = "alt";
    card_hading.className = "card-heading";
    card_hading.innerText = `${detail.heading}`;
    card_title.className = "card-title";
    card_title.innerText = `${detail.title}`;
    card_link.className = "card-link";
    card_link.innerText = "View Details";
    card_link.href = "#";
    
    card_img.append(img);
    card_body.append(card_hading, card_title, card_link);
    card.append(card_img, card_body);
    rent_container.append(card);
}

function appendData(data) {
    let card_list = document.createElement("div");
    card_list.className = "class-list";

    data.forEach((detail) => {
        let card = createcard(detail);
        card_list.append(card);

    });
}



async function fetchcard(url) {
    try {
        let res = await fetch(`${url}`);
        let data = await res.json();
        console.log("card", data);
        appendData(data);
    }
    catch (error) {
        console.log("error");
    }
}
fetchcard(datacd);