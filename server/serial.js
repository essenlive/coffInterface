Meteor.startup(function() {

	// change the path and baudrate to match your setup
	serialPort = new SerialPort.SerialPort('/COM9', {
		baudrate: 38400,
		parser: SerialPort.parsers.readline('\r\n')
	});

	serialPort.on('open', function() {
		console.log('Port open');
	});

    // receive data
    serialPort.on('data', Meteor.bindEnvironment(function (error, result) {
    	var data = error;

    	var spoutsTemp = State.findOne({name: 'command'});
    	spoutsTemp = spoutsTemp && spoutsTemp.command.spouts;
    	var payment = "pending";
    	var check = data.substr( 5, 1 ); 
    	var payment = data.substr( 4, 1 ); 
    	var spouts = data.substr( 0, 4 );
    	var waiting = true;

    	console.log("----------------");
    	console.log(data);
    	console.log("------");
    	console.log("check: " + check);

    	if ( check === "y" ) {
    		if (payment === "2")	payment = "success";
    		if (payment === "0")	payment = "fail";
    		State.update({name: "command"}, { $set: {"command.order.payment" : payment,	}});

    		_.each(spouts, function(element,index){
    			switch(element){
    				case "1":
    				spoutsTemp[index].state = "ready";
    				waiting = false;
    				break;
    				case "2":
    				spoutsTemp[index].state = "busy";
    				break;
    				case "0":
    				default:
    				spoutsTemp[index].state = "available";
    			}
    		})
    		console.log(spoutsTemp, waiting);
    		State.update({name: "command"}, { $set: {"command.spouts" : spoutsTemp,	}});
    		State.update({name: "command"}, { $set: {"command.order.waiting" : waiting,	}});

    	}
    }));
});

Meteor.methods({
	sendToSerialPort: function (message) {
		for (var i = 0; i <= 3; i++) {
			setTimeout(function(){
				serialPort.write(message);
				console.log(message);
			}, 25);
		}
		return message;
	},
	updateState: function (command) {
		State.update({name: "command"}, { 
			name: "command",
			command : command
		});
		return command;
	},
});