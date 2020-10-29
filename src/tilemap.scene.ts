import { Math, Tilemaps } from "phaser";

export class TileMapScene extends Phaser.Scene {
    private readonly TILESIZE: number = 16;
    private map: Tilemaps.Tilemap;

    private preload() {
        this.load.image("tiles", "./assets/super-mario-16bit.png");
        this.load.tilemapTiledJSON("map", "./assets/map.json");
    }

    private create() {
        this.map = this.make.tilemap({ key: "map" });
        const tileset = this.map.addTilesetImage("super-mario-16bit", "tiles");
        const downLayer = this.map.createDynamicLayer("down", tileset);
        const midLayer = this.map.createDynamicLayer("mid", tileset);
        const upLayer = this.map.createDynamicLayer("up", tileset);

        // this.game.input.mouse.capture = true;
    }

    // public update(time: number, delta: number) {
    //     const pointer = this.game.input.activePointer;
    //     if (pointer.leftButtonDown()) {
    //         // console.log("mouse pos: ", pointer.position);
    //         const pos = pointer.position;
    //         const posIdx_x = Math.FloorTo(pos.x / this.TILESIZE);
    //         const posIdx_y = Math.FloorTo(pos.y / this.TILESIZE);

    //         // console.log("map idx: ", posIdx_x, posIdx_y);
    //         let tile = this.map.getLayer("up").data[posIdx_y][posIdx_x];
    //         // console.log("tile: ", tile);
    //         if (tile.index > -1) {
    //             this.tileHandler(tile);
    //         } else {
    //             tile = this.map.getLayer("mid").data[posIdx_y][posIdx_x];
    //             if (tile.index > -1) {
    //                 this.tileHandler(tile);
    //             } else {
    //                 tile = this.map.getLayer("down").data[posIdx_y][posIdx_x];
    //                 if (tile.index > -1) {
    //                     this.tileHandler(tile);
    //                 }
    //             }
    //         }

    //     }
    // }

    // private tileHandler(tile: Tilemaps.Tile) {
    //     if (tile.properties.hasOwnProperty("name")) {
    //         console.log(tile.properties.name);
    //     }
    //     // tile.index = -1;
    // }
}