<template>
  <div class="home">
    <particle-text
      txt="lyric"
      :colors="[
        '#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5',
        '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50',
        '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800'
      ]"
      :width="300"
      :height="150"
    />
    <ball/>
    <deer/>
    <br/>
    <clock :type="index.toString()"
      v-for="(item, index) in 15"
      :key="index"
    />
  </div>
</template>

<script>
import ball from '@/components/g3d/ball'
import deer from '@/components/g3d/deer'
import started from '@/components/three/started'
import particleText from '@/components/canvas/particle-text'
import clock from '@/components/canvas/clock'
export default {
  name: 'home',
  components: {
    ball,
    deer,
    started,
    particleText,
    clock
  }
}
</script>

<style lang="stylus" scoped>
.home
  text-align center
  margin-top 60px
</style>
