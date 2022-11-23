let CELL_HEIGHT = 40  // width will be the same since its a square
let ROW_COUNT = 12    // we have 12 distinctable rows of alternating patterns
let COLUMN_COUNT = 20

function setup() {
  createCanvas(COLUMN_COUNT * CELL_HEIGHT, ROW_COUNT * CELL_HEIGHT);
  background(50);
  noStroke()
  for(var x = 0; x < COLUMN_COUNT; x++) {
    for(var y = 0; y < ROW_COUNT; y++) {
      shade = 150 * sin(PI * y / 12)
      fill(random(shade,shade + 105), 0, 0)
      x1 = x * CELL_HEIGHT
      y1 = y * CELL_HEIGHT
      square(x1, y1, CELL_HEIGHT)
      fill(random(shade,shade + 105), 0, 0)
      x2 = x1
      if(y % 2 == 0) {
        x2 += CELL_HEIGHT
      }
      triangle(x1, y1, x1 + CELL_HEIGHT, y1, x2, y1 + CELL_HEIGHT)
    }
  }
}

function draw() {

}
