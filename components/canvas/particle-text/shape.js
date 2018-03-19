import Particle from './particle.js'

class Shape {
  constructor (ctx, x, y, txt, colors) {
    this.ctx = ctx
    this.x = x
    this.y = y
    this.text = txt
    this.colors = colors

    this.size = 120
    this.placement = []
  }
  drawText () {
    const gridX = 5
    const gridY = 5
    const W = this.x
    const H = this.y

    // Draw the shape
    const ctx = this.ctx
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.font = 'bold ' + this.size + 'px 微软雅黑'
    ctx.fillText(this.text, this.x / 2, this.y / 2 - 15)

    const idata = ctx.getImageData(0, 0, W, H)
    const buffer32 = new Uint32Array(idata.data.buffer)
    for (let y = 0; y < H; y += gridY) {
      for (let x = 0; x < W; x += gridX) {
        if (buffer32[y * W + x]) {
          const particle = new Particle(ctx, W, H, x, y, this.colors, 0, 0.1)
          this.placement.push(particle)
        }
      }
    }
    ctx.clearRect(0, 0, W, H)
  }
}

export default Shape
