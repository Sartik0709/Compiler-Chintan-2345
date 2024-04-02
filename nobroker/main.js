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
  
  // login 
  let login= document.getElementById('login');
  let cont= document.getElementById('container');
  let loginbut =document.getElementById('login1');
  let close=document.getElementById('close');
  
  loginbut.addEventListener('click', function() {
    
      login.style.display = 'block'; // Show the container
  
  });

  //close login button
  close.addEventListener('click', function() {
    login.style.display = 'none';
  });

  // check the login credintials 

const userInputField = document.getElementById('userInput');
const additionalInputsDiv = document.getElementById('additionalInputs');
const passwordContainerDiv = document.getElementById('passwordContainer');
const checkButton = document.getElementById('checkButton');


const apiUrl = 'https://compiler-chintan-2345.onrender.com/user_sartik';

checkButton.addEventListener('click', async () => {
  const userInput = userInputField.value.trim();

  if (!userInput) {
    alert('Please enter a phone number to check.');
    return;
  }

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`API request failed with status: ${response.status}`);
    }

    const data = await response.json();

    let isPhoneNoPresent = false;

    for (const user of data) {
      if (user['phone-no'] === userInput) {
        isPhoneNoPresent = true;
        passwordContainerDiv.style.display = 'block'; // Show password field
        break;
      }
    }

    if (!isPhoneNoPresent) {
      additionalInputsDiv.style.display = 'block'; 
      // additionalInputsDiv.style.justifyContent = 'space-between';// Show add. input boxes
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred while checking data.');
  }
});