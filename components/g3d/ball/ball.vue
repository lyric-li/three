<template>
  <canvas class="ball" width=600 height=600 ref="ball"></canvas>
</template>

<script>
import G3D from 'g3d'

let engine = null
let scene = null
let camera = null, light = null

export default {
  name: 'ball',
  mounted () {
    this.init(G3D, {canvas: this.$refs.ball})
    this.animate()
  },
  methods: {
    init (G3D, {canvas}) {
      // create 3d engine
      engine = new G3D.Engine(canvas)

      // create a scene
      scene = new G3D.Scene(engine)

      // create camera
      camera = new G3D.ArcRotateCamera(scene)
      camera.alpha = 45
      camera.beta = 30
      camera.radius = 12
      camera.fov = 60

      // create 3 lights
      light = new G3D.HemisphereLight(scene)
      Object.assign(light.ground, {r: 200, g: 100, b: 100})
      Object.assign(light.sky, {r: 0, g: 144, b: 255})

      // create mesh (ball)
      const ball = G3D.MeshBuilder.createSphere(scene, 2, 64, 64)
      Object.assign(ball.position, {x: 1, y: 1, z: 1})
      Object.assign(ball.materials.default.diffuseColor, {r: 200, g: 100, b: 100})
      Object.assign(ball.materials.default.specularColor, {r: 200, g: 100, b: 100})
      ball.materials.default.glossiness = 10
    },
    c () {
      camera.alpha = Math.sin(Date.now() / 1000) * 90
      camera.beta = Math.sin(Date.now() / 1000) * 90
    },
    animate () {
      this.c()
      scene.render()
      requestAnimationFrame(this.animate)
    }
  }
}
</script>

<style lang="stylus" scoped>
.ball
  width 300px
  margin auto
  // display block
</style>
