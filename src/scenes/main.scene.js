import { ECS, AssetsManager } from 'miaam';

const { getResource, getResourceData } = AssetsManager.instance;
class Main extends ECS.Scene {
	map;

	player;

	camera;

	constructor() {
		super();
		this.initializeEntities();
		console.log(this.map, this.player);
	}

	initializeEntities = () => {
		this.map = getResourceData('/assets/dummy/tilemap/IUTcampus.tilemap.json');
		this.player = getResource('/assets/dummy/images/Abir.png');
	};
}

export default Main;
