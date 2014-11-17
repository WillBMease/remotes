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
        if (e.which == 48){
        socket.emit('play', "loudorgasm")
        }
        else if (e.which == 49){

        }
        else if (e.which == 50){
            
        }
        else if (e.which == 51){
            
        }
        else if (e.which == 52){
            
        }
        else if (e.which == 53){
            
        }
        else if (e.which == 54){
            
        }
        else if (e.which == 55){
            
        }
        else if (e.which == 56){
            
        }
        else if (e.which == 57){
            
        }
    })