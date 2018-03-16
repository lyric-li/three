<template>
  <canvas class="particle-text" ref="particleText"></canvas>
</template>

<script>
import Shape from './shape'
import utils from './utils'

let canvas = null
let ctx = null
let W = null
let H = null

let gridX = 5
let gridY = 5

// const colors = ['#FF0000', '#0000FF']
const colors = [
  '#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5',
  '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50',
  '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800',
  '#FF5722'
]

let txt = null
const fps = 60
export default {
  name: 'particle-text',
  mounted () {
    this.init()
  },
  methods: {
    init () {
      canvas = this.$refs.particleText
      ctx = canvas.getContext('2d')
      W = canvas.width = window.innerWidth
      H = canvas.height = 190

      txt = new Shape(W / 2, H / 2 + 45, 'lyric')
      txt.drawText(ctx, W, H, gridX, gridY, colors)
      this.render()
    },
    render () {
      setTimeout(() => {
        ctx.clearRect(0, 0, W, H)
        for (let i = 0; i < txt.placement.length; i++) {
          const particle = txt.placement[i]
          particle.update(ctx, 0, 0.4, 0.1, 0.1)
        }
        requestAnimationFrame(this.render)
      }, 1000 / fps)
    }
  }
}
</script>

<style>

</style>
