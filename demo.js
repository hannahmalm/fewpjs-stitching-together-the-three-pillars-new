// We use this code, known as Objects, to control toggling like / unlike status


//Create variables for the colors and glyphs
let glyphStates = {
  "♡": "♥",
  "♥": "♡"
};

let colorStates = {
  "red" : "",
  "": "red"
};

// STEP 1: This code is what lets JavaScript find the elements that we want to make clickable.
// Without JavaScript, clicking on these heart shapes does nothing. Uncomment
// this code and refresh the demo page.

//find the like-glyph heart shape
//https://careerkarma.com/blog/javascript-queryselector-vs-getelementbyid/  -> describes the difference between query selector and get element by id
//use query selector to grab a class name or multiple things, get element by id only grabs one thing
//always ensure you have a .class before the class name 
//use let to create the variable
//1. GRAB the variable
let articleHearts = document.querySelectorAll(".like-glyph");

//2. Create a function for the callback
//https://developer.mozilla.org/en-US/docs/Glossary/Callback_function 
//Callback functions are other functions passed in as an argument 
function likeCallback(e) {
  debugger;
  let heart = e.target;
  mimicServerCall()
    .then(function(serverMessage){
      // STEP 2: Uncomment the next 3 lines.
      // We'll use Pillar 1 (DOM Manipulation) to update the screen and
      // mimic Pillar 3 (Server Communication) to only update the screen if the
      // sending of information to the server succeeds.
      alert("You notified the server!");
      // alert(serverMessage);
      // heart.innerText = glyphStates[heart.innerText];
      // heart.style.color = colorStates[heart.style.color];
    })
    .catch(function(error) {
      alert("Something went wrong!");
    });
}

// STEP 3: In order for the call to the server and the update of the screen to
// work, the elements we identify in STEP 1 need to be told to run that update
// code when an "event" is fired. That's Pillar 2, event handling. Uncomment
// this code.

for (let glyph of articleHearts) {
  glyph.addEventListener("click", likeCallback);
}

// STEP 4: 

// When all the STEPs' code changes have been complete, you'll be able to see a
// working demonstration of our reference example. Sure, it's maybe not as
// pretty as a professional site, but they're only different from our site in
// style, not substance.

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve("Pretend remote server notified of action!");
    }, 300);
  });
}
