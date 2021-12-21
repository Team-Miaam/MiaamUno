class Main extends Scene{

	Tilemap tilemap;
	Camera camera1;
	Camera camera2;
	Player player;

	constructor() {
		camera1 = new Camera();
		this.camera1.position.bind({position: player.position, offset: {x: 0.5, y: 0.5}});
	}
    
}