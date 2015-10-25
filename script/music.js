// Variables to start
/////////////////////
var myRootToSounds = 'sounds/';
var myRootToSWF = 'swf/';
var soundManager = soundManager || {};
var animalSounds = ['cat.wav', 'bat.mp3', 'cow.wav', 'dog.wav', 'monkey.mp3', 'frog.mp3', 'elephant.mp3', 'horse.mp3', 'goat.mp3', 'lion.mp3'];
var animalButtons = ['catButton', 'batButton', 'cowButton', 'dogButton', 'monkeyButton', 'frogButton', 'elephantButton', 'horseButton', 'goatButton', 'lionButton'];
var sound = [];


$(document).ready(function(){ 
  soundManager.setup({
    url: myRootToSounds,
    flashVersion: 9,
    preferFlash: false, // prefer 100% HTML5 mode, where both supported
    onready: function() {
      console.log('SM2 ready!');
      
      // Creating sounds
      //////////////////
      createSounds();
    },
    ontimeout: function() {
      console.log('SM2 init failed!');
    },
    defaultOptions: {
      // set global default volume for all sound objects
      volume: 33
    }
  })

  // Adding Event Listeners
  /////////////////////////
  addListeners();
});


// Create sounds for all our sound files
function createSounds() {
  for (var i = animalSounds.length - 1; i >= 0; i--) {
    console.log('Sound ', i ,' created!')
    sound[i] = soundManager.createSound({
      id: '#'+ animalButtons[i],
      url: myRootToSounds + animalSounds[i],
      volume: 50
    });
    console.log('Sound is ', sound[i]);
  }
}

// Pass a Listener to all the buttons
function addListeners(){
  $.each(animalButtons, function(index, button) {    
    $('#'+button).on("click", function() {
      sound = animalSounds[index];
      //console.log(sound);
      playSound(sound);
    });
  })
}

// Playing a sound
function playSound(filename) {
  console.log('filename is: ', filename);
  var sound = soundManager.createSound({
    url: myRootToSounds + filename
  });
  sound.play();
}
