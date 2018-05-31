<template lang="html">
  <div class="wrap">
      <wy-list-one></wy-list-one>
      <hr>
      <wy-list-two></wy-list-two>
  </div>
</template>

<script>
import wyListOne from './components/listOne.vue';
import wyListTwo from './components/listTwo.vue';

export default {
  components:{
    'wy-list-one':wyListOne,
    'wy-list-two':wyListTwo
  }
}
</script>

<style lang="css">
  *{padding: 0; margin: 0;}
</style>
