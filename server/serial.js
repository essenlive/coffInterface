Meteor.methods({
	sSendToSerialPort: function (message) {
		serialPort.write(message);

		return "some return value";
	},
});
