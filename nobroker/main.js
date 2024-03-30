// ---------------------------------------list part ------------------------------------------------

let maincontainer = document.getElementById("main_container");
let head_list = document.createElement("div");
let h3_1 = document.createElement("h3");
h3_1.className = "head1";
let h3_2 = document.createElement("h3");
h3_2.className = "head2";
let h3_3 = document.createElement("h3");
h3_3.className = "head3";
let h3_4 = document.createElement("h3");
h3_4.className = "head4";
let h3_5 = document.createElement("h3");
h3_5.className = "head5";
let h3_6 = document.createElement("h3");
h3_6.className = "head6";
let h3_7 = document.createElement("h3");
h3_7.className = "head7";
let h3_8 = document.createElement("h3");
h3_8.className = "head8";


head_list.className = "head_list";
h3_1.innerText = "Properties & Flats for Sale";
h3_2.innerText = "Flats for Rent";
h3_3.innerText = "PG / Hostels";
h3_4.innerText = "Flatmates";
h3_5.innerText = "Miscellaneous";
h3_6.innerText = "Commercial";
h3_7.innerText = "New Projects & Plots";
h3_8.innerText = "City Real Estate";

head_list.append(h3_1, h3_2, h3_3, h3_4, h3_5, h3_6, h3_7, h3_8);
maincontainer.append(head_list);

let allcity = document.createElement("div");
allcity.className = "all-city";



let item = `http://localhost:3000/cities`;

async function fetchData(url) {
    try {
        let res = await fetch(`${url}`);
        let data = await res.json();
        // console.log(data);

        data.forEach(city => {

            // console.log(city.name);

            const div = document.createElement('div');
            const ul = document.createElement('ul');
            // Iterate over categories
            city.categories.forEach(category => {

                //  console.log(category);
                for (let prop in category) {
                    switch (prop) {
                        case 'category1':

                            const h4_L = document.createElement('h4');
                            h4_L.textContent = `Flats for Sale in ${city.name}`;
                            ul.append(h4_L);
                            let r = `${category[prop]} ${city.name}`;
                             console.log(r);
                            category.locations.forEach(location => {
                                const li = document.createElement('li');
                                li.textContent = `Flats for Sale in ${location}`;
                                ul.appendChild(li);
                                div.append(ul);
                                //  console.log(location); // Print each location
                            });

                            break;
                        case 'category2':
                            const h4_P = document.createElement('h4');
                            h4_P.textContent = `Property for Sale in ${city.name}`;
                            ul.append(h4_P);
                            let t = `${category[prop]} ${city.name}`;
                            // console.log(t);
                            category.locations.forEach(location => {
                                const li = document.createElement('li');
                                li.textContent = `Property for Sale in ${location}`;

                                ul.appendChild(li);
                                div.append(ul);

                                // console.log(location); // Print each location
                            });
                            break;

                    }
                }
                allcity.append(div);
            });
        });
    }
    catch (error) {
        console.log("Error");
    }
}
fetchData(item);

maincontainer.append(allcity);

h3_1.addEventListener("click", () => {
    document.body.style.backgroundColor = "pink"
})

