<template>
  <div class="clock">
    <canvas id="clock" ref="clock" width="200px" height="200px"></canvas>
  </div>
</template>

<script>
import * as clock from './canvas_clock'
import * as config from './clock.config'
export default {
  name: 'clock',
  props: {
    type: {
      type: String,
      default: '0'
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      const canvas = this.$refs.clock
      const ctx = canvas.getContext('2d')
      const size = 200
      const type = this.type
      switch (type) {
        case '0':
          clock.clock_conti(size, ctx, config.clockd1_)
          break
        case '1':
          clock.clock_digital(size, ctx, config.clockd2_)
          break
        case '2':
          clock.clock_norm(size, ctx, config.clockd3_)
          break
        case '3':
          clock.clock_binary(size, ctx, config.clockd4_)
          break
        case '4':
          clock.clock_follow(size, ctx, config.clockd5_)
          break
        case '5':
          clock.clock_circles(size, ctx, config.clockd6_)
          break
        case '6':
          clock.clock_dots(size, ctx, config.clockd7_)
          break
        case '7':
          clock.clock_roulette(size, ctx, config.clockd8_)
          break
        case '8':
          clock.clock_num(size, ctx, config.clockd9_)
          break
        case '9':
          clock.clock_planets(size, ctx, config.clockd10_)
          break
        case '10':
          clock.clock_digitalran(size, ctx, config.clockd11_)
          break
        case '11':
          clock.clock_bars(size, ctx, config.clockd12_)
          break
        case '12':
          clock.clock_grow(size, ctx, config.clockd13_)
          break
        case '13':
          clock.clock_random(size, ctx, config.clockd14_)
          break
        case '14':
          clock.clock_reverse(size, ctx, config.clockd15_)
          break
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.clock
  display inline-block
  width max-content
  height max-content
  padding 10px
</style>

