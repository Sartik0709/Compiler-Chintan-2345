// async function fetchsartik(url) {
//     try {
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data);
//         appendData(data)

//     } catch (error) {
//         console.log(error);
//     }
// }

// fetchdatasartik("http://localhost:3000/menu");

// menu  functionality
const menuButton = document.getElementById('menu');
  const container = document.getElementById('menu1');

  menuButton.addEventListener('click', function() {
    if (container.style.display === 'none') {
      container.style.display = 'block'; // Show the container
    } else {
      container.style.display = 'none'; // Hide the container
    }
  });

  //  post your property functionality

  function showPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "block";
  }

  function hidePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
  }