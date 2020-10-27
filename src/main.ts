import "phaser";
import { Demo } from "./demo";

let config = {
  type: Phaser.AUTO,
  width: 800,
  height: 800,
  scene: [
    Demo
  ],
};

let game = new Phaser.Game(config);