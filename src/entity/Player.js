
class Player extends Entity {

	FSMAutomata inp;	

	@Serialize
	Position position;

	Sprite sprite;

	Physics body;

	const speed = 5;

	const health = 100;

	Script movement = new Script({
		onStart: () => {
			setupInput();
		},

		onUpdate: (deltaTime) => {

		},
	});
	
	setupInput = () => {
		inp.setStart(idle);
		inp.setTransition({from: onIdle, to: onWalk, condition: () => { return Keyboard.isPressed.any(['w', 's', 'a', 'd'])}, defaultState: onidle});
	}
	
	onIdle =  () => {
			this.sprite.update({state: 'idle'});
	}

	onWalk = (deltaTime) => {
		if(Keyboard.isPressed("w")) {
			const updatedPosition = {
				x: this.position.x + speed * deltaTime;
			};
			this.position.update(updatedPosition);
			this.sprite.update({state: 'walkUp'});
		}
	}
		
}


Player.serialize()