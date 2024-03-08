(function(){
  'use strict'
  console.log('reading js');

  const body = document.querySelector('body');
  const p = document.querySelector('p');
  const cos = document.getElementById("countdown");
  const reel = document.getElementById("filmreel");
  const real = document.getElementById("realContent");
  

  let counter = 10;

  function countTimeDown() {
      console.log(`running countTimeDown ${11 - counter} time(s)`);
      setTimeout(function(){
          if(counter > 0){
              counter--;
              p.textContent = counter;
              countTimeDown();

          }
          else{
            reel.style.display="none";
            real.style.display="block";
            body.id="defaultP";
            
          
          }
      }, 1000);
  }
  countTimeDown();
}());