// ---------------------------------------list part ------------------------------------------------

let maincontainer = document.getElementById("main_container");
let head_list = document.createElement("div");
let h3_1 = document.createElement("h3");
let h3_2 = document.createElement("h3");
let h3_3 = document.createElement("h3");
let h3_4 = document.createElement("h3");
let h3_5 = document.createElement("h3");
let h3_6 = document.createElement("h3");
let h3_7 = document.createElement("h3");
let h3_8 = document.createElement("h3");


head_list.className = "head_list";
h3_1.innerText = "Properties & Flats for Sale";
h3_2.innerText = "Flats for Rent";
h3_3.innerText = "PG / Hostels";
h3_4.innerText = "Flatmates";
h3_5.innerText = "Miscellaneous";
h3_6.innerText = "Commercial";
h3_7.innerText = "New Projects & Plots";
h3_8.innerText = "City Real Estate";

head_list.append(h3_1,h3_2,h3_3,h3_4,h3_5,h3_6,h3_7,h3_8);
maincontainer.append(head_list);

let item = `http://localhost:3000/cities`;

async function fetchData(url){
 try{
     let res = await fetch(`${url}`);
     let data = await res.json();
     console.log(data);

    const ul = document.createElement('ul');

     data.forEach(city => {
       
        // Iterate over categories
        city.categories.map(category => {
            const h4 = document.createElement('h4');
            h4.textContent =`Flats for Sale in ${city.name}`;
            ul.append(h4);
            console.log("Flats for Sale in ",city.name)
        //   
            // Iterate over locations
             //console.log(category.category)
            category.locations.forEach(location => {
                const li = document.createElement('li');
                li.textContent = `Flats for Sale in ${ location}`;
                ul.appendChild(li);
                console.log("Flats for Sale in ",location); // Print each location
            });
        });
    });

    maincontainer.append(ul);
 }
 catch(error){
    console.log("Error");
 }
}
fetchData(item);