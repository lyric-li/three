import utils from './utils'

class particle {
  constructor (x, y, type, gravity, colors, radius) {
    this.x = x
    this.y = y
    this.type = type
    this.gravity = gravity
    this.color = colors[Math.floor(Math.random() * colors.length)]

    this.radius = 1.1
    this.friction = .99
    this.futurRadius = utils.randomInt(radius, radius + 3)
    this.rebond = utils.randomInt(1, 5)

    this.dying = false
    this.base = [x, y]

    this.vx = 0
    this.vy = 0
  }
  getSpeed () {
    return Math.sqrt(this.vx * this.vx + this.vy * this.vy)
  }
  setSpeed (speed) {
    const heading = this.getHeading()
    this.vx = Math.cos(heading) * speed
    this.vy = Math.sin(heading) * speed
  }
  getHeading () {
    return Math.atan2(this.vy, this.vx);
  }
  setHeading (heading) {
    const speed = this.getSpeed()
    this.vx = Math.cos(heading) * speed
    this.vy = Math.sin(heading) * speed
  }
  angleTo (p2) {
    return Math.atan2(p2.y - this.y, p2.x - this.x)
  }
  update (ctx, gravity, duration, speed, radius) {
    this.x += this.vx
    this.y += this.vy
    this.vy += gravity

    this.vx *= this.friction
    this.vy *= this.friction

    if(this.radius < this.futurRadius && this.dying === false) {
      this.radius += duration
    }else{
      this.dying = true;
    }

    if(this.dying === true){
      this.radius -= duration
    }

    ctx.beginPath()
    ctx.fillStyle = this.color
    ctx.arc(this.x, this.y, this.radius, Math.PI * 2, false)
    ctx.fill()
    ctx.closePath()

    if (this.y < 0 || this.radius < 1) {
      this.x = this.base[0]
      this.dying = false
      this.y = this.base[1]
      this.radius = 1.1
      this.futurRadius = utils.randomInt(radius, radius + 3)
      this.setHeading(utils.randomInt(utils.degreesToRads(0), utils.degreesToRads(360)))
      this.setSpeed(speed)
    }
  }
}

export default particle
