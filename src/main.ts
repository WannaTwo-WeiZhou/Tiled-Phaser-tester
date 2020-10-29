import "phaser";
import { SpriteScene } from "./sprite.scene";
import { TileMapScene } from "./tilemap.scene";

let config = {
  type: Phaser.AUTO,
  width: 3200,
  height: 3200,
  scene: [
    TileMapScene
  ],
  // plugins: {
  //   scene: [
  //     {
  //       key: "AnimatedTiles",
  //       plugin: Phaser.Plugins.ScenePlugin.,
  //       mapping: "animatedTiles",
  //     },
  //   ],
  // },
};

let game = new Phaser.Game(config);