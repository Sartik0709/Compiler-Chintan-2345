var links = document.querySelectorAll(".box a");

function changeColor(event) {
  links.forEach(function (link) {
    link.style.color = "black";
  });
  this.style.color = "red";
}
// let rentbutton = document.getElementById('rent1');
let buy = document.getElementById('kunwar_buy');
let rent =document.getElementById('rent1');
let commercial = document.getElementById('commercial1');
let buyonclick = document.getElementById('buy');
let rentonclick = document.getElementById('rent');
let commercialonclick = document.getElementById('commercial');
  // for Rent
rentonclick.addEventListener('click', function() {
    
      commercial.style.display= 'none';  
      buy.style.display = 'none';
      rent.style.display = 'block';
     
});

 // for Buy
 buyonclick.addEventListener('click', function() {
    
  // Show the container   
 buy.style.display = 'block'; 
 commercial.style.display= 'none';
 rent.style.display = 'none';

 
});

commercialonclick.addEventListener("click", function () {
  
    rent.style.display = 'none';
    buy.style.display = 'none'; 
    commercial.style.display= '';
  
});


  