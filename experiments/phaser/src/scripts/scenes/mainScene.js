import FpsText from '../objects/fpsText'

export default class MainScene extends Phaser.Scene {
  fpsText

  constructor() {
    super({ key: 'MainScene' })
  }

  create() {
    this.fpsText = new FpsText(this);
    const map = this.make.tilemap({ key: "gameboardMap" });

    const tileset = map.addTilesetImage("pdg", "gameboard");

    const belowLayer = map.createStaticLayer("GameBoard", tileset, 0, 0);

  }


  update() {
    this.fpsText.update()
  }
}
