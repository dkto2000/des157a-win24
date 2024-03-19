(function(){
  'use strict'
  console.log('reading js');



  const body = document.querySelector('body');
  const p = document.querySelector('p');
  const cos = document.getElementById("countdown");
  const reel = document.getElementById("filmreel");
  const real = document.getElementById("realContent");
  const mob = document.getElementById("mobilereel");
  const vietmap = document.querySelector('.map1');

  let counter = 10;


  // function to call on timer to load main content in.
  function countTimeDown() {
      console.log(`running countTimeDown ${11 - counter} time(s)`);
      setTimeout(function(){
          if(counter > 0){
              counter--;
              p.textContent = counter;
              countTimeDown();
              reel.style.display="block";
              real.style.display="none";
              mob.style.display="none";
// Makes countdown disappear and brings in next page
          } 
          
          // Makes the preloader load the mobile script if screen is less than 769 pixels
          else if(window.innerWidth < 769) {
          reel.style.display="none";
          mob.style.display="block";
         
          }

          // Spawns the default code if screen does not meet criteria
           else {
            reel.style.display="none";
            real.style.display="block";
            vietmap.style.display="block"
            body.id="defaultP";
           }
          
      
             
      }, 1000);
  }
  countTimeDown();
	

}());