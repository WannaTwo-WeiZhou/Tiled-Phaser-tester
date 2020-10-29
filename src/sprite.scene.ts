import { Math } from "phaser";
import mapJson from "./assets/map.json";

export class SpriteScene extends Phaser.Scene {
    private mapWidth: number;
    private mapHeight: number;
    private tileSize: number;

    private tileNum: number = 0;
    private preload() {
        this.load.spritesheet("tiles", "./assets/super-mario-16bit.png", { frameWidth: 16, frameHeight: 16 });
    }

    private create() {
        this.mapWidth = mapJson.width;
        this.mapHeight = mapJson.height;
        this.tileSize = mapJson.tilewidth;
        const layers = mapJson.layers;
        for (const layer of layers) {
            const data = layer.data;
            let i = 0;
            for (const one of data) {
                if (one !== 0) {
                    this.createSprite(i, one);
                }
                i++;
            }
        }
        console.log("num: ", this.tileNum);
    }

    private createSprite(idx: number, key: number) {
        const yIdx = Math.FloorTo(idx / this.mapWidth);
        const xIdx = idx - yIdx * this.mapWidth;
        const x = (xIdx + 0.5) * this.tileSize;
        const y = (yIdx + 0.5) * this.tileSize;

        this.add.sprite(x, y, "tiles", key - 1);
        this.tileNum++;
    }
}