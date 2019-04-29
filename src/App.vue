<template>
  <div id="app">
    <div>其他的文章内容容容</div>
    <div>其他的文章内容容容</div>
    <div>其他的文章内容容容</div>
    <div>其他的文章内容容容</div>
    <div>其他的文章内容容容</div>
    <input type="button" value="点我" @click="isShow=!isShow">
    <!-- <toothSelector v-show='isShow' :historyProp=test  v-model='teeth'/> -->
    <toothSelector v-show='isShow' />
    <!-- <div>其{{teeth}}</div>
    <div>其他的文章内容容容</div>
    <div>其他的文章内容容容</div>
    <div>其他的文章内容容容</div> -->
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      // test: {'d1': 'LaD', 'd2': '', 'a1': 'P', 'a4': 'F', 'b2': '', 'c4': ''},
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
