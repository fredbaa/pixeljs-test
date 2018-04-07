document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    var game = new PixelJS.Engine();
    game.init({
      container: 'game_container',
      width: 800,
      height: 600
    });

    var backgroundLayer = game.createLayer('background');
    var grass = backgroundLayer.createEntity();
    backgroundLayer.static = true;
    grass.pos = { x: 0, y: 0 };
    grass.asset = new PixelJS.Tile();
    grass.asset.prepare({
      name: 'grass.png',
      size: {
        width: 800,
        height: 600
      }
    });

    console.log("game loaded")
    game.loadAndRun(function (elapsedTime, dt) {
    });
  }
}
