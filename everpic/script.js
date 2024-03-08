(function(){
  'use strict'
  console.log('reading js');



  const body = document.querySelector('body');
  const p = document.querySelector('p');
  const cos = document.getElementById("countdown");
  const reel = document.getElementById("filmreel");
  const real = document.getElementById("realContent");
  

  let counter = 10;


  // function to call on timer to load main content in.
  function countTimeDown() {
      console.log(`running countTimeDown ${11 - counter} time(s)`);
      setTimeout(function(){
          if(counter > 0){
              counter--;
              p.textContent = counter;
              countTimeDown();
// Makes countdown disappear and brings in next page
          } 
          else{  
            reel.style.display="none";
            real.style.display="block";
            body.id="defaultP";
            
          
          }
      }, 1000);
  }
  countTimeDown();


window.addEventListener('load', function () {

	const posts = document.querySelectorAll('section');
	const figureImg = document.querySelector('figure img');
	let postTops = [];
	let pageTop;
	let counter = 1;
	let prevCounter = 1;
	let doneResizing;

	
	resetPagePosition();


	window.addEventListener('scroll', function () {
		pageTop = window.pageYOffset + 400;


		// if the page is being scrolled
		if (pageTop > postTops[counter]) {
			counter++;
			
		}
		// if page is being scrolled up
		else if (counter > 1 && pageTop < postTops[counter - 1]) {
			counter--;
		
		}

		// Every time a section changes
		if (counter != prevCounter) {
			
			figureImg.className = 'map' + counter;
			prevCounter = counter;
		}

	}); // end window scroll function

	// Resize window event
	window.addEventListener('resize', function () {

		clearTimeout(doneResizing);
		// this runs after the window has stopped being resized...
		doneResizing = setTimeout(function () {

			resetPagePosition();

		}, 500);
	});

	// this function resets variables that may have been altered after resizing
	function resetPagePosition() {
		postTops = [];
		posts.forEach(function (post) {
			postTops.push(Math.floor(post.getBoundingClientRect().top) + window.pageYOffset);
		});

		const pagePosition = window.pageYOffset + 300;
		counter = 0;

		postTops.forEach(function (post) { if (pagePosition > post) { counter++; } });

	}

});


}());