<template>
  <div id="app">
    <div>其他的文章内容容容</div>
    <div>其他的文章内容容容</div>
    <div>其他的文章内容容容</div>
    <div>其他的文章内容容容</div>
    <div>其他的文章内容容容</div>
    <!-- <input type="button" value="点我" @click="isShow=!isShow"> -->
    <toothSelector v-show='isShow' :historyProp=test  v-model='teeth'/>
    <!-- <toothSelector v-show='isShow' /> -->
    <div>其{{teeth}}</div>
    <div>其</div>
    <div>其他的文章内容容容</div>
    <div>其他的文章内容容容</div>
  </div>
</template>

<script>
import toothSelector from './lib/index.js'

export default {
  name: 'app',
  components: {
    toothSelector
  },
  data () {
    return {
      test: { "d1": [ "La", "D" ], "d2": [], "a1": [ "P" ], "a4": [ "F" ], "b2": [ "" ], "c4": [ "" ], "d<6|7>": [ "" ] },
      isShow: true,
      teeth: {}
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
