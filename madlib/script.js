(function () {
  "use strict";
  console.log("reading js");
  // your code starts here
  const myForm = document.querySelector(`form`);
  const formOne =document.getElementById('form1');
  const formTwo =document.getElementById('form2');
  const formArt =document.getElementById('madlibs');
  const reBtn = document.querySelector('button');

  formOne.addEventListener('submit', function(e) {
        
    e.preventDefault();

    const shitfuck = document.getElementById('shitfuck').value;
    const noun1 = document.getElementById('noun1').value;
    const noun2 = document.getElementById('noun2').value;
    const verb1 = document.getElementById('verb1').value;
    const animal1 = document.getElementById('animal1').value;

    let myText;
  if(shitfuck == '') {
      myText = 'Please choose to use either "shit" or "fuck"';
      document.getElementById('shitfuck').focus();
  } else if(verb1 == '') {
      myText = 'Please provide an Verb';
      document.getElementById('verb1').focus();
  } else if(noun1 == '') {
      myText = 'Please provide a noun';
      document.getElementById('noun1').focus();
  } else if(noun2 == '') {
      myText = 'Please provide another noun';
      document.getElementById('noun2').focus();
  } else if(animal1 == '') {
      myText = 'Please provide a type of animal';
      document.getElementById('animal1').focus();
  }else {

     formTwo.style.display = 'block';
    formOne.style.display = 'none';
  }

});

formTwo.addEventListener('submit', function(e) {
        
  e.preventDefault();

  
  const shitfuck = document.getElementById('shitfuck').value;
  const noun1 = document.getElementById('noun1').value;
  const noun2 = document.getElementById('noun2').value;
  const verb1 = document.getElementById('verb1').value;
  const verb2 = document.getElementById('verb2').value;
  const animal1 = document.getElementById('animal1').value;
  const color = document.getElementById('color').value;
  const number = document.getElementById('number').value;
  const fast = document.getElementById('fast').value;
  
  
  let myText;
  if(color == '') {
      myText = 'Please provide a color';
      document.getElementById('color').focus();
  } else if(number == '') {
      myText = 'Please provide a number';
      document.getElementById('number').focus();
  } else if(verb2 == '') {
      myText = 'Please provide another verb';
      document.getElementById('verb2').focus();
  } else if(fast == '') {
      myText = 'Please provide the name of a fast food joint';
      document.getElementById('fast').focus();
  } else {


      formTwo.style.display = 'none';
      document.getElementById('overlay').style.display = 'block';
      document.querySelector('button').style.display = 'block';
      formArt.style.display ='block';

      myText = `Dear ${shitfuck}face,

      You are out! Since you refuse to ${verb1} me in the kitchen, I will air out my ${noun1} here. 
      Here’s the story of your life. Ever since you walked into MY kitchen, you’ve been a complete fuck-up.Your ${noun2}fish taste like ${animal1}-penis! You made a ${color} raw wellington for a dear friend of mine. I had to deduct ${number} from your paycheck in order to pay for his medical bills! And worst of all, I heard from the staff that you ${verb2} But don’t worry I heard ${fast} is hiring. 
      
      Go Home, 
      Gordon Ramsey.`

  document.getElementById('shitfuck').value ='';
 document.getElementById('noun1').value ='';
  document.getElementById('noun2').value ='';
  document.getElementById('verb1').value ='';
 document.getElementById('verb2').value ='';
  document.getElementById('animal1').value ='';
 document.getElementById('color').value ='';
 document.getElementById('number').value ='';
  document.getElementById('fast').value ='';
  }

 reBtn.addEventListener('click', function(e){
  e.preventDefault();
  document.getElementById('overlay').style.display = 'none';
  document.querySelector('button').style.display = 'none';
    formArt.innerHTML = '';
    formOne.style.display="block";
});
  formArt.innerHTML =myText;


});



})();