Template.spouts.helpers({
	state1: function(){
		var state1 = State.findOne({name: 'command'});
		return state1 && state1.command.spouts[0].state;
	},
	state2: function(){
		var state2 = State.findOne({name: 'command'});
		return state2 && state2.command.spouts[1].state;
	},
	state3: function(){
		var state3 = State.findOne({name: 'command'});
		return state3 && state3.command.spouts[2].state;
	},
	state4: function(){
		var state4 = State.findOne({name: 'command'});
		return state4 && state4.command.spouts[3].state;
	},
});