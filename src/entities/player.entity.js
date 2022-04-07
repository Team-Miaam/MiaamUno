import { ECS } from 'miaam';

class Player extends ECS.Entity {
	#sprite;

	#position;

	constructor({ sprite, position }) {
		super();
	}

	init() {}
}

export default Player;
