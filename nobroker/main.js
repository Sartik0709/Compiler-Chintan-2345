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
let buttons1=document.getElementById('button-Signlogin')
let accountlogin=document.createElement('account-login');

const apiUrl = 'https://compiler-chintan-2345.onrender.com/user_sartik';

// Declare isPhoneNoPresent outside the first if statement for better scoping
let isPhoneNoPresent = false;

checkButton.addEventListener('click', async () => {
  const userInput = userInputField.value.trim();
   

  if (!userInput) {
    alert('Please enter a phone number to check.');
    return;
  }

  // try {
    if(checkButton.textContent=='Check'){
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`API request failed with status: ${response.status}`);
    }

    const data = await response.json();
    // console.log(data)
    isPhoneNoPresent = false; // Reset flag before loop

    for (const user of data) {
      if (user['phone-no'] === userInput) {
        isPhoneNoPresent = true;
        passwordContainerDiv.style.display = 'block'; // Show password field
        checkButton.textContent='Login';
        let name =user['username']
        // console.log(name);
        localStorage.setItem("name",JSON.stringify(name));
        break;
        
      }
    }

    if (!isPhoneNoPresent) {
      additionalInputsDiv.style.display = 'block'; 
      // additionalInputsDiv.style.justifyContent = 'space-between';// Show add. input boxes
    }
   //catch (error) {
  //   console.error('Error:', error);
  //   alert('An error occurred while checking data.');
  // }
  }
  // Password handling if phone number exists
  if (isPhoneNoPresent) {
    const passwordInputField = document.getElementById('passwordInput');

    checkButton.addEventListener('click', async () => {
      const enteredPassword = passwordInputField.value.trim();
      if (!enteredPassword) {
        alert('Please enter your password.');
        return;
      }
       if(checkButton.textContent=='Login'){
      // Simulate sending password to server for validation (replace with actual API call)
      const response = await fetch(apiUrl);
      if (!response.ok) {
      throw new Error(`API request failed with status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data)
      if (data !=='null' ) {
        // Password validated successfully, redirect to homepage
      
         console.log("login click")   
        
        
        window.location.href = 'index.html';
        console.log(uname);
      } else {
        alert('Invalid password. Please try again.');
      }
    }
    });
  }
});


       let userName=document.getElementById('userName');

        let uname= JSON.parse(localStorage.getItem("name"));
        if( uname!==null){
          userName.textContent=uname;
          console.log(uname);
          buttons1.style.display='none';
          accountlogin.style.display='block';
        }
     else{
      buttons1.style.display='flex';
      accountlogin.style.display='none';
      }
      
      // let signout=document.getElementById('Signout');
      let logout=document.getElementById('logout');
     
      // dropdown for username to logout 
      userName.addEventListener('click',function(){
        console.log("inside this" )
        if (logout.style.display === 'none') {
          logout.style.display = 'block'; // Show the container
          // logout.style.flexDirection='column';
        } else {
          logout .style.display = 'none'; // Hide the container
        }
      });
     const signout=document.getElementById('Signout');
      
        signout.addEventListener('click', function() {
          accountlogin.style.display='none';
        console.log("remove");
        logout.style.display = 'none';
        buttons1.style.display='flex';
        console.log("add");
        localStorage.removeItem("name");
        console.log("delete");
        
      });
    

      // localStorage.removeItem("name");