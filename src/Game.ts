class Game {
	gameWidth: number;
	gameHeight: number;
	grass: Grass;
	inputHandler: InputHandler;
	player: Player;
	blocks: Tile[][];
	levelLayers: Level[];
	mobList: Mob[];

	spritesheet: HTMLImageElement;

	testeMob: TesteMob;
	statsManager: StatsManager;

	constructor() {

	}

	start() {
		this.statsManager = new StatsManager();
		this.statsManager.hungryDecrease();
		this.statsManager.thirstDecrease();
		this.statsManager.cagarDecrease();
		this.statsManager.energyDecrease();

		// instanciate stuff
		this.grass = new Grass(); // TODO: REMOVE THIS
		this.inputHandler = new InputHandler(this);
		this.spritesheet = new Image();
		this.spritesheet.src = "../images/spritesheet2.png";
		this.player = new Player(game, PLAYER_INITIAL_POSITION_X, PLAYER_INITIAL_POSITION_Y);

		// TODO: make a layers array later

		this.levelLayers = [
			new Ground(LEVEL)
		];

		this.blocks = [];

		for (let layerIndex = 0; layerIndex < this.levelLayers.length; layerIndex++) {
			const layer = this.levelLayers[layerIndex];
			this.blocks.push(layer.buildLevel());
		}

		// console.log(this.blocks);

		this.mobList = [
			new Canguru(Math.floor(Math.random() * WORLD_WIDTH - 200) + 200, WORLD_HEIGHT - 200, 200, 100),
			new Canguru(200, 100, 200, 100)
		];


	}
	
	
	// updates mobs, tiles etc
	update(deltaTime) {
		// updates the player
		this.player.update(deltaTime);

		// updates all mobs
		for (let mob = 0; mob < this.mobList.length; mob++) {
			if (this.mobList[mob].defeated) {
				if (mob > -1) {
					// removing the mob from the array if defeated
					this.mobList.splice(mob, 1);
				}
				continue;
			}

			this.mobList[mob].update(deltaTime);
		}

		this.statsManager.update();
	}

	isWithinRenderDistance(block: Tile, renderDistance: number) {
		return (block.x > this.player.x - (GAME_WIDTH/2) - TILESIZE*renderDistance &&
				block.x < this.player.x + (GAME_WIDTH/2) + TILESIZE*renderDistance &&
				block.y > this.player.y - (GAME_HEIGHT/2) - TILESIZE*renderDistance &&
				block.y < this.player.y + (GAME_HEIGHT/2) + TILESIZE*renderDistance);
	}

	// renders entities, tiles, and stuff
	render(ctx) {

		this.grass.render(ctx);
		// TODO: GET RID OF THIS LAYER THING, IT SUCKS
		// TODO: MAKE A TILE FOR THE TREE BUT WITH THE GRASS UNDER IT
		for (let layer = 0; layer < this.blocks.length; layer++) {
			const currentLayer = this.blocks[layer];
			for (let blockIndex = 0; blockIndex < currentLayer.length; blockIndex++) {
				const block = currentLayer[blockIndex];

				// optimization (render distance)
				// TODO: make the same but for mobs and stuff
				// renders the block if it is within the render distance
				if (this.isWithinRenderDistance(block, RENDER_DISTANCE))
					block.render(ctx);
			}
			
		}
		
		// TODO rendering mobs (TODO: isso provavelmente é temporario, checar classe Level)
		for (let mob = 0; mob < this.mobList.length; mob++) {
			this.mobList[mob].render(ctx);
		}
		
		// rendering the player (really? :P)
		this.player.render(ctx);
		if (DEBUG) {
			ctx.strokeStyle = 'red';
			ctx.lineWidth = 5;
			ctx.beginPath();
			ctx.moveTo(this.player.x + this.player.width/2, this.player.y + this.player.height/2);
			ctx.lineTo(this.player.x + this.player.width/2 + this.player.vx * 5, this.player.y + this.player.height/2 + this.player.vy * 5);
			ctx.stroke();
		}
	}
}