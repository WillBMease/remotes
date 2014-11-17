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


    socket.on('play', function(data){
        playSound(data)
    })


    $(document).keypress(function(e) { 
        console.log(e.which)
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
    })