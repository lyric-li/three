<template>
  <canvas class="deer" width=600 height=600 ref="deer"></canvas>
</template>

<script>
import G3D from 'g3d'
import * as loader from '@/utils/loader'

let engine = null
let scene = null
let camera = null, light = null
let deer = null

export default {
  name: 'deer',
  mounted () {
    this.init(G3D, {canvas: this.$refs.deer})
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
      camera.center.y = 1200
      camera.alpha = 70
      camera.beta = 15
      camera.radius = 2800

      camera.near = 1
      camera.far = 30000

      // create 3 lights
      const light1 = new G3D.DirectionalLight(scene)
      light1.direction.x = 1
      light1.direction.y = 1
      light1.direction.z = 1
      light1.intensity = 0.5

      const light2 = new G3D.HemisphereLight(scene)
      light2.intensity = 0.5

      loader.loadImage('https://img.alicdn.com/tfs/TB1jxUkigvD8KJjy0FlXXagBFXa-1024-512.jpg', image => {
        loader.loadText('https://g.alicdn.com/gama/assets/0.0.3/assets/models/goose/index.json', content => {
          const model = JSON.parse(content)
          deer = G3D.MeshBuilder.createFromG3DModel(scene, model)
          deer.materials.default.diffuseTexture.image = image
          deer.materials.default.diffuseSource = G3D.Material.TEXTURE
        })
      })
    },
    c () {
      if (deer) {
        deer.rotation.y = Math.sin(Date.now() / 3000) * 75
      }
    },
    animate () {
      // this.c()
      scene.render()
      requestAnimationFrame(this.animate)
    }
  }
}
</script>

<style lang="stylus" scoped>
.deer
  width 300px
  margin auto
</style>
