(function(){
  'use strict'
  console.log('reading js');

  const body = document.querySelector('body');
  const p = document.querySelector('p');
  const cos = document.getElementById("countdown");
  const reel = document.getElementById("filmreel");


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
           
          
          }
      }, 1000);
  }
  countTimeDown();
}());