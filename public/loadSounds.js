window.onload = init;
var context;
var bufferLoader;
var loudorgasm;
  
  window.AudioContext = window.AudioContext || window.webkitAudioContext;
  context = new AudioContext();

function init() {
  // Fix up prefixing

  bufferLoader = new BufferLoader(
    context,
    [
      '/sounds/loudorgasm.mp3',
    ],
    finishedLoading
    );

  bufferLoader.load();
}

function finishedLoading(bufferList) {
  loudorgasm = bufferList[0]
  console.log("sounds loaded!")
}

function playSound(sound){
  var source = context.createBufferSource()
  if (sound == 'loudorgasm'){
    source.buffer = loudorgasm
    source.connect(context.destination)
    source.start(0)
  }
      source.onended = function() {
      source.stop()
    }
}

    var source; 
    var audio0 = new Audio(); 

function playIntro(){  
    audio0.src = '/sounds/westsong.mp3';
    audio0.controls = true;
    audio0.autoplay = true;
    audio0.loop = true;
    source = context.createMediaElementSource(audio0);
    source.connect(context.destination);
    audio0.play(0)
}
// playIntro()

function killIntro(){
  audio0.pause()
  audio0.currentTime = 0;
}