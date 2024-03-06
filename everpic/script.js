(function(){
  'use strict'
  console.log('reading js');

  const body = document.querySelector('body');
  const p = document.querySelector('p');
  const bA = document.getElementById("back"); 
  const cos = document.getElementById("countdown");
  const rightBlock =  document.getElementById("rightBlocks");
  const leftBlock =  document.getElementById("leftBlocks");


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
            cos.style.display="none";
            rightBlock.style.display="none";
            overlay.style.display="none";
            leftBlock.style.display="none";
            body.className='defaultP';
           
          
          }
      }, 1000);
  }
  countTimeDown();
}());