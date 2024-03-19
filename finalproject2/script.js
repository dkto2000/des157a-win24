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

const captions = [
	'',
	'',
	'<img src="images/youngongnoi.JPG" alt="youngong">',
	'<img src="images/ongnoicop2.JPG" alt="cop">',
	'<img src="images/ongnoi3.JPG" alt="mature">',
	'<img src="images/ongnoi4.JPG" alt="imprisonment" id="prison">',
	' <img src="images/ongnoi5.JPG" alt="imprisonment" id="family">'
	

];

let figCaption = document.querySelector('figcaption');

figCaption.innerHTML = captions[1];

window.onbeforeunload = function () {
	window.scrollTo(0, 0);
}

window.addEventListener('load', function () {

	const posts = document.querySelectorAll('section');
	const figureImg = document.querySelector('figure img');
	let postTops = [];
	let pageTop;
	let counter = 1;
	let prevCounter = 1;
	let doneResizing;
	let exitDirection;
	let enterDirection;

	
	resetPagePosition();


	window.addEventListener('scroll', function () {
		pageTop = window.pageYOffset + 300;


		// if the page is being scrolled
		if (pageTop > postTops[counter]) {
			counter++;
			console.log(`scrolling down ${counter}`);
		}
		// if page is being scrolled up
		else if (counter > 1 && pageTop < postTops[counter - 1]) {
			counter--;
			console.log(`scrolling up ${counter}`);
		
		}

		// Every time a section changes
		if (counter != prevCounter) {
			figureImg.className = 'map' + counter;
			if (counter > prevCounter) {
				exitDirection = 'animate exitup';
				enterDirection = 'animate enterup';
			}
			else {
				exitDirection = 'animate exitdown';
				enterDirection = 'animate enterdown';
			}

			figCaption.className = exitDirection;
			figCaption.addEventListener('animationend', function () {
				let newCaption = document.querySelector('figcaption').cloneNode(true);
				figCaption.remove();
				newCaption.className = enterDirection;
				newCaption.innerHTML = captions[counter];
				document.querySelector('figure').appendChild(newCaption);
				figCaption = document.querySelector('figcaption');
			});

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