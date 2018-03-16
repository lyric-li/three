import Particle from './particle.js'

class shape {
  constructor (x, y, txt) {
    this.x = x
    this.y = y
    this.text = txt

    this.size = 120
    this.placement = []
  }
  drawText (ctx, W, H, gridX, gridY, colors) {
    console.log('get black pixels position')

    // Draw the shape
    ctx.textAlign = 'center'
    ctx.font = 'bold ' + this.size + 'px 微软雅黑'
    ctx.fillText(this.text, this.x, this.y)

    const idata = ctx.getImageData(0, 0, W, H)
    const buffer32 = new Uint32Array(idata.data.buffer)
    for (let y = 0; y < H; y += gridY) {
      for (let x = 0; x < W; x += gridX) {
        if (buffer32[y * W + x]) {
          const particle = new Particle(x, y, '', 0, colors, 0.1)
          this.placement.push(particle)
        }
      }
    }
    ctx.clearRect(0, 0, W, H)
  }
}

export default shape
