(function(){
  'use strict'
  console.log('reading js');



  const body = document.querySelector('body');
  const p = document.querySelector('p');
  const cos = document.getElementById("countdown");
  const reel = document.getElementById("filmreel");
  const real = document.getElementById("realContent");
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
              real.style.display="none";
// Makes countdown disappear and brings in next page
          } 
          else{  
            reel.style.display="none";
            real.style.display="block";
            vietmap.style.display="block";
            body.id="defaultP";
            
          
          }
      }, 1000);
  }
  countTimeDown();
	

}());