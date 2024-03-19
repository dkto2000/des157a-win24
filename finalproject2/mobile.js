(function () {
  'use strict';
  const real = document.getElementById("realContent");
  const hotSpots = document.querySelectorAll('#container div');
  const h1 = document.querySelector('h1');
  const headerP = document.querySelector('header p');
  const theImg = document.querySelector('div img');
  // will be used to determine which hotspot div you mouse over, if any.
  let thisSpot;
  // will be used to determine when the mouse has stopped moving.
  let movingMouse;

  // This is the function that zooms in on the photo
  function zoomPhoto(event) {
    
      //update thisSpot with the part of the image the user is mousing over
      thisSpot = event.target.id;
      console.log(`zooming into ${thisSpot}`);
      switch (thisSpot) {
          case 'thaibinh': theImg.className = 'thaibinh'; break;
          case 'haiphong': theImg.className = 'haiphong'; break;
          case 'saigon': theImg.className = 'saigon'; break;
          case 'hue': theImg.className = 'hue'; break;
          case 'center': theImg.className = 'hue'; break;
      }
      if(thisSpot = event.target.id){
          switch (thisSpot) {
              case 'thaibinh': h1.innerHTML = "1932"; break;
              case 'haiphong': h1.innerHTML = "1954"; break;
              case 'saigon': h1.innerHTML = "1960"; break;
              case 'hue': h1.innerHTML = "1975"; break;
              // case 'center': h1.innerHTML = "blah"; break;
          }
          switch (thisSpot) {
            case 'thaibinh': headerP.innerHTML = "My grandpa was born De Manh To and he was raised in the then Northern Vietnamese town of Thái Bình. He was the first son of a third wife and was raised in a humble estate up until his adolescence"; break;
            case 'haiphong': headerP.innerHTML = "This year saw my Ong Noi leave his hometown because of the rise of communism in his community, and so he traveled to Hai Phong harbor to sail to to Southern Vietnam via Operation Passage to Freedom."; break;
            case 'saigon': headerP.innerHTML = "1960 saw my Ong Noi mature into his own as he just graduated college and started his career as a police officer in Saigon."; break;
            case 'hue': headerP.innerHTML = "This year was a tumultuous year as my Ong Noi was taken prisoner during the Fall of Saigon and was sent to a reeducation camp in Hue province and he was not able to contact nor visit his wife or family during this period."; break;
           
        }
   
      }
  }

  // Add event listeners to each of the hotspots
  hotSpots.forEach(function (eachSpot) {
      // when you mouse over a hotspot, zoom in on it.
      eachSpot.addEventListener('mouseover', zoomPhoto);
      
      // when you mouse out of a hotspot, update thisSpot to 
      // indicate you are not over a hotspot.
      eachSpot.addEventListener('mouseout', function () {
          thisSpot = 'out';
          console.log(thisSpot);
      });
  });

  /* This event listener fires while the mouse is moving.
  If the value of thisSpot is 'out' you are not over a hotspot. 
  If you stop moving the mouse for a second or longer while not
  over a hotspot, the image zooms out.
  
  This seems to keep the dizzying effects of constantly zooming in and
  out as you mouse in and out of the hotspots to a minimum, and stops the 
  unintended effect of having the image sometimes slide out of the container
  entirely.
  */
  document.addEventListener('mousemove', function(){
      clearTimeout(movingMouse);
      if(thisSpot == 'out'){
          movingMouse = setTimeout(function(){
              theImg.className = 'start';
              console.log('zooming out!');
          }, 1000);
      }
  });
})();