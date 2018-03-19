<template>
  <div class="particle-text">
    <canvas ref="particleText"></canvas>
  </div>
</template>

<script>
import Shape from './shape'

let canvas = null
let ctx = null
let W = null
let H = null
let shape = null

const fps = 60
export default {
  name: 'particle-text',
  props: {
    txt: {
      type: String,
      default: 'lyric'
    },
    colors: {
      type: Array,
      default: () => {
        return [
          '#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5',
          '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50',
          '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800'
        ]
      }
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 200
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      canvas = this.$refs.particleText
      ctx = canvas.getContext('2d')
      W = canvas.width = this.width
      H = canvas.height = this.height

      shape = new Shape(ctx, W, H, this.txt, this.colors)
      shape.drawText()
      this.render()
    },
    render () {
      setTimeout(() => {
        ctx.clearRect(0, 0, W, H)
        for (let i = 0; i < shape.placement.length; i++) {
          const particle = shape.placement[i]
          particle.update(0, 0.4, 0.1, 0.1)
        }
        requestAnimationFrame(this.render)
      }, 1000 / fps)
    }
  }
}
</script>

<style>

</style>
