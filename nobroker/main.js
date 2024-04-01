let hr=document.createElement("hr")
let navy_con=document.querySelector(".navy")
let h2=document.createElement("h2");
h2.innerText="NoBroker services";
navy_con.append(hr,h2);
h2.classList.add("high");
//carousel


// function generateCard(card) {
//     return `
//     <div class="card">
//       <img class="image" src="${card.image}" alt="${card.name}'s Image">
//       <div class="name">${card.name}</div>
//       <div class="rating">${'★'.repeat(card.rating)}</div>
//       <div class="review">"${card.review}"</div>
//       <div class="description">${card.description}</div>
//     </div>
//   `;
//   }
//   const cardData = [
//     {
//       "name": "Lisa Das",
//       "rating": 5,
//       "review": "It's a nice experience",
//       "description": "It was a nice experience with Nobroker. They helped me to find a new home to stay as it was difficult for me, as an individual, to find a home with friendly roommates. Thankfully Nobroker helped me to get one with all kinds of facilities.",
//       "image": "https://assets.nobroker.in/images/testimonials/ff8081815185752901518659f9cc12da.jpg"
//     },
//     {
//       "name": "John Smith",
//       "rating": 4,
//       "review": "Great service!",
//       "description": "I had a great experience with Nobroker. Their service was exceptional, and they helped me find the perfect apartment in no time.",
//       "image": "https://assets.nobroker.in/images/testimonials/ff8081815185752901518659f9cc12da.jpg"
//     },
//     {
//       "name": "Emily Johnson",
//       "rating": 5,
//       "review": "Highly recommend!",
//       "description": "Nobroker made my apartment hunting experience so much easier. The staff was helpful and professional, and I found exactly what I was looking for.",
//       "image": "https://assets.nobroker.in/images/testimonials/ff8081815185752901518659f9cc12da.jpg"
//     },
//     {
//       "name": "Michael Brown",
//       "rating": 3,
//       "review": "Decent service",
//       "description": "Overall, my experience with Nobroker was decent. They provided some good options, but it took a bit longer than expected to find the right place.",
//       "image": "https://assets.nobroker.in/images/testimonials/ff8081815185752901518659f9cc12da.jpg"
//     },
//     {
//       "name": "Sophia Wilson",
//       "rating": 4,
//       "review": "Satisfied customer",
//       "description": "I'm a satisfied customer of Nobroker. They helped me find a comfortable and affordable place to live in a convenient location.",
//       "image": "https://assets.nobroker.in/images/testimonials/ff8081815185752901518659f9cc12da.jpg"
//     },
//     {
//       "name": "David Martinez",
//       "rating": 5,
//       "review": "Excellent service!",
//       "description": "I couldn't be happier with Nobroker's service. They went above and beyond to ensure I found the perfect apartment. Highly recommended!",
//       "image": "https://assets.nobroker.in/images/testimonials/ff8081815185752901518659f9cc12da.jpg"
//     },
//     {
//       "name": "Emma White",
//       "rating": 4,
//       "review": "Good experience overall",
//       "description": "My experience with Nobroker was positive. They provided me with several good options, and I eventually found a place that suited my needs.",
//       "image": "https://assets.nobroker.in/images/testimonials/ff8081815185752901518659f9cc12da.jpg"
//     },
//     {
//       "name": "Daniel Lee",
//       "rating": 3,
//       "review": "Could be better",
//       "description": "While Nobroker did help me find a place, I think there's room for improvement in terms of communication and efficiency.",
//       "image": "https://assets.nobroker.in/images/testimonials/ff8081815185752901518659f9cc12da.jpg"
//     },
//     {
//       "name": "Olivia Garcia",
//       "rating": 5,
//       "review": "Fantastic experience!",
//       "description": "Nobroker made my apartment search stress-free. They understood my requirements perfectly and found me an amazing place to live.",
//       "image": "https://assets.nobroker.in/images/testimonials/ff8081815185752901518659f9cc12da.jpg"
//     }
//   ]
//   const container = document.querySelector('.card-container');
//   const allCardsHTML = cardData.map(generateCard).join('');
//   container.innerHTML = allCardsHTML;
//   let slideIndex = 0;
//   const cards = document.querySelectorAll('.card');
//   showSlides();
//   function showSlides() {
//     for (let i = 0; i < cards.length; i++) {
//       cards[i].style.display = "none";
//     }
//     for (let i = slideIndex; i < slideIndex + 3; i++) {
//       if (i < cards.length) {
//         cards[i].style.display = "block";
//       }
//     }
//   }
  
//   function prevSlide() {
//     if (slideIndex > 0) {
//       slideIndex -= 3;
//     }
//     else {
//       slideIndex = Math.floor(cards.length / 3) * 3;
//     }
//     showSlides();
//   }
  
  
//   function nextSlide() {
//     if (slideIndex < cards.length - 3) {
//       slideIndex += 3;
//     }
//     else {
//       slideIndex = 0;
//     }
//     showSlides();
//   }
  



