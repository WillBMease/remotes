window.onload = init;
var context;
var bufferLoader;
var loudorgasm, cumming, heavybreathing, malemoaning, ohh, realecstacy, satisfying, vocalsorgasm, goats, inthepussy;
  
  window.AudioContext = window.AudioContext || window.webkitAudioContext;
  context = new AudioContext();

function init() {
  // Fix up prefixing

  bufferLoader = new BufferLoader(
    context,
    [
      '/sounds/loudorgasm.mp3',
      '/sounds/cumming.mp3',
      '/sounds/heavybreathing.mp3',
      '/sounds/malemoaning.mp3',
      '/sounds/ohh.mp3',
      '/sounds/realecstacy.mp3',
      '/sounds/satisfying.mp3',
      '/sounds/vocalsorgasm.mp3',
      '/sounds/goats.mp3',
      '/sounds/inthepussy.mp3',
    ],
    finishedLoading
    );

  bufferLoader.load();
}

function finishedLoading(bufferList) {
  loudorgasm = bufferList[0]
  cumming = bufferList[1]
  heavybreathing = bufferList[2]
  malemoaning = bufferList[3]
  ohh = bufferList[4]
  realecstacy = bufferList[5]
  satisfying = bufferList[6]
  vocalsorgasm = bufferList[7]
  goats = bufferList[8]
  inthepussy = bufferList[9]
}

function playSound(sound){
  var source = context.createBufferSource()
  if (sound == 'loudorgasm'){
    source.buffer = loudorgasm
    source.connect(context.destination)
    source.start(0)
  }
  else if (sound == 'cumming'){
    source.buffer = cumming
    source.connect(context.destination)
    source.start(0)
  }
  else if (sound == 'heavybreathing'){
    source.buffer = heavybreathing
    source.connect(context.destination)
    source.start(0)
  }
  else if (sound == 'malemoaning'){
    source.buffer = malemoaning
    source.connect(context.destination)
    source.start(0)
  }
  else if (sound == 'ohh'){
    source.buffer = ohh
    source.connect(context.destination)
    source.start(0)
  }
  else if (sound == 'realecstacy'){
    source.buffer = realecstacy
    source.connect(context.destination)
    source.start(0)
  }
  else if (sound == 'satisfying'){
    source.buffer = satisfying
    source.connect(context.destination)
    source.start(0)
  }
  else if (sound == 'vocalsorgasm'){
    source.buffer = vocalsorgasm
    source.connect(context.destination)
    source.start(0)
  }
  else if (sound == 'goats'){
    source.buffer = goats
    source.connect(context.destination)
    source.start(0,8,8)
  }
  else if (sound == 'inthepussy'){
    source.buffer = inthepussy
    source.connect(context.destination)
    source.start(0,19,1.5)
  }
      source.onended = function() {
      source.stop()
    }
}

    var source; 
    var audio0 = new Audio(); 

// function playIntro(){  
//     audio0.src = '/sounds/westsong.mp3';
//     audio0.controls = true;
//     audio0.autoplay = true;
//     audio0.loop = true;
//     source = context.createMediaElementSource(audio0);
//     source.connect(context.destination);
//     audio0.play(0)
// }
// playIntro()

function killIntro(){
  audio0.pause()
  audio0.currentTime = 0;
}