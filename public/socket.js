var socket = io() ;

 console.log('in here')
    socket.on('test', function (data) {
        console.log('data is: ' + data)
        var thisID = data.length - 1
        if (data[thisID] != peer.id && user[1] == 0) {
            var c = peer.connect(data[thisID]);
            console.log('this is a TEST: ' + c)
          c.on('open', function(){
            connect(c);
            });
            c.on('error', function(err){ alert(err) }); 
        }
    });

var now = 0;

    socket.on('play', function(data){
        var check = +new Date()
        if (check - now > 3000)
        playSound(data)
    })

    socket.on('open', function(data){
        var check = +new Date()
        var randWindow = Math.floor(Math.random() * 9999999) + 1 ;
        if (check - now > 3000)
        window.open(data, randWindow, "height=600,width=800")
    })

var context = new (window.AudioContext || window.webkitAudioContext ||  
    window.mozAudioContext || 
    window.oAudioContext || 
    window.msAudioContext)();
if (context) {
  // Web Audio API is available.
} else {
  alert('browser not supported') ;
}

var pwindows = [
            "http://www.ashleyrnadison.com/",
            'http://new.livejasmin.com/en/?showPreviousVersionLink=0',
            'http://www.adulthookups.com/dating/allaboutsex2',
            'http://blackpleasure.net/',
            'http://www.fling.com/tour/zhulavidrappop/?prg=1&id=phpop_us&tour=zhulavidrappop&ot=zhulavidrappop&ad_id=totaltrak_68741_246&utm_source=phpop_us&utm_medium=_nocmp&utm_content=totaltrak_68741_246&utm_campaign=zhulavidrappop&ej=flnoej',
            'http://www.snapsext.com/tour/zsnapsexthulavid2fanpop/?prg=1&id=phpop_us&tour=zsnapsexthulavid2fanpop&ot=zsnapsexthulavid2fanpop&ad_id=totaltrak_68741_220&utm_source=phpop_us&utm_medium=_nocmp&utm_content=totaltrak_68741_220&utm_campaign=zsnapsexthulavid2fanpop&ej=ssnoej',   
            'http://www.livejasmin.com/listpage.php?psid=futuration&campaign_id=80651&pstour=t1&psprogram=REVS&pstool=15_1',        
            'http://www.livejasmin.com/freechat.php?performerid=SabinaBlack&tags=girl&recId=i2lqcm7y-8emgmbd42z1-0q9w7nn&recPos=203&hq=0',        
            'http://www.pornhub.com/',       
            'http://www.spankwire.com/',       
            'https://pbs.twimg.com/profile_images/426548205611139072/lWNFAlcZ.jpeg',       
            'http://chris.demero.net/wp-content/uploads/2013/02/gorilla_showing_you_the_middle_finger.jpeg'
]


// var interval = setInterval(openwindow, 500)

function openwindow(){
    // window.open('http://www.google.com', randWindow, "height=600,width=1800")
    var rand = Math.floor(Math.random() * 12) + 1
    var randname = Math.floor(Math.random() * 999999999999) + 1
    window.open(pwindows[rand], randname, "height=600,width=1800")
}



    $(document).keypress(function(e) { 
        console.log(e.which)
        now = +new Date()
        if (e.which == 48){
            socket.emit('play', "loudorgasm")
        }
        else if (e.which == 49){
            socket.emit('play', "cumming")
        }
        else if (e.which == 50){
            socket.emit('play', "heavybreathing")
        }
        else if (e.which == 51){
            socket.emit('play', "malemoaning")
        }
        else if (e.which == 52){
            socket.emit('play', "ohh")
        }
        else if (e.which == 53){
            socket.emit('play', "realecstacy")
        }
        else if (e.which == 54){
            socket.emit('play', "satisfying")   
        }
        else if (e.which == 55){
            socket.emit('play', "vocalsorgasm")
        }
        else if (e.which == 56){
            socket.emit('play', "goats")
        }
        else if (e.which == 57){
            socket.emit('play', "inthepussy")
        }
        else if (e.which == 113){
            console.log('sending')
            socket.emit('open', "http://www.ashleyrnadison.com/")
        }
        else if (e.which == 119){
            socket.emit('open', 'http://new.livejasmin.com/en/?showPreviousVersionLink=0')
        }
        else if (e.which == 101){
            socket.emit('open', 'http://www.adulthookups.com/dating/allaboutsex2')
        }
        else if (e.which == 114){
            socket.emit('open', 'http://blackpleasure.net/')
        }
        else if (e.which == 116){
            socket.emit('open', 'http://www.fling.com/tour/zhulavidrappop/?prg=1&id=phpop_us&tour=zhulavidrappop&ot=zhulavidrappop&ad_id=totaltrak_68741_246&utm_source=phpop_us&utm_medium=_nocmp&utm_content=totaltrak_68741_246&utm_campaign=zhulavidrappop&ej=flnoej')
        }
        else if (e.which == 121){
            socket.emit('open', 'http://www.snapsext.com/tour/zsnapsexthulavid2fanpop/?prg=1&id=phpop_us&tour=zsnapsexthulavid2fanpop&ot=zsnapsexthulavid2fanpop&ad_id=totaltrak_68741_220&utm_source=phpop_us&utm_medium=_nocmp&utm_content=totaltrak_68741_220&utm_campaign=zsnapsexthulavid2fanpop&ej=ssnoej')   
        }
        else if (e.which == 117){
            socket.emit('open', 'http://www.livejasmin.com/listpage.php?psid=futuration&campaign_id=80651&pstour=t1&psprogram=REVS&pstool=15_1')
        }
        else if (e.which == 105){
            socket.emit('open', 'http://www.livejasmin.com/freechat.php?performerid=SabinaBlack&tags=girl&recId=i2lqcm7y-8emgmbd42z1-0q9w7nn&recPos=203&hq=0')
        }
        else if (e.which == 111){
            socket.emit('open', 'http://www.pornhub.com/')
        }
        else if (e.which == 112){
            socket.emit('open', 'http://www.spankwire.com/')
        }
        else if (e.which == 122){
            socket.emit('open', 'https://pbs.twimg.com/profile_images/426548205611139072/lWNFAlcZ.jpeg')
        }
        else if (e.which == 120){
            socket.emit('open', 'http://chris.demero.net/wp-content/uploads/2013/02/gorilla_showing_you_the_middle_finger.jpeg')
        }
    })

$('#initializeaudio').click(function(){
    myAudio.play()
    myAudio.pause()
})

var audio, myAudio

  myAudio = document.getElementById('audio')
  audio = context.createMediaElementSource(myAudio);
  audio.connect(context.destination)
    myAudio.play()