<template>
  <div class="home">
    <ball/>
    <deer/>
    <!-- <started/> -->
  </div>
</template>

<script>
import ball from '@/components/g3d/ball'
import deer from '@/components/g3d/deer'
import started from '@/components/three/started'
export default {
  name: 'home',
  components: {
    ball,
    deer,
    started
  }
}
</script>

<style lang="stylus" scoped>
.home
  text-align center
  margin-top 60px
</style>
