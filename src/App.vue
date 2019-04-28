<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>12122<sup>aa</sup> </p>
    <input type="button" value="点我" @click="isShow=!isShow">
    <toothSelector v-show='isShow'/>
    <div>bbb</div>
    <div>ccc</div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      isShow: true
    }
  },
}
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
  }
  body {
    padding-left: 50px;
  }
</style>
