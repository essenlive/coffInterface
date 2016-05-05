Meteor.startup(function() {

    // change the path and baudrate to match your setup
    // serialPort = new SerialPort.SerialPort('/COM5', {
    //     baudrate: 3400,
    //     parser: SerialPort.parsers.readline('\r\n')
    // });

    // serialPort.on('open', function() {
    //     console.log('Port open');
    // });
});

Meteor.methods({
	sendToSerialPort: function (message) {
		// serialPort.write(message);
		console.log(message);
		return message;
	},
});
