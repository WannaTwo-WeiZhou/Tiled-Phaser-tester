import "phaser";
import { Demo } from "./demo";

let config = {
  type: Phaser.AUTO,
  width: 320,
  height: 160,
  scene: [
    Demo
  ],
};

let game = new Phaser.Game(config);