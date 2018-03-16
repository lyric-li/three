<template>
  <div class="home">
    <particle-text/>
    <ball/>
    <deer/>
  </div>
</template>

<script>
import ball from '@/components/g3d/ball'
import deer from '@/components/g3d/deer'
import started from '@/components/three/started'
import particleText from '@/components/canvas/particle-text'
export default {
  name: 'home',
  components: {
    ball,
    deer,
    started,
    particleText
  }
}
</script>

<style lang="stylus" scoped>
.home
  text-align center
  margin-top 60px
</style>
