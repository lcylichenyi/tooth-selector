<template>
  <div id="app">
    <div>其他的文章内容容容</div>
    <div>其他的文章内容容容</div>
    <div>其他的文章内容容容</div>
    <div>其他的文章内容容容</div>
    <div>其他的文章内容容容</div>
    <!-- <input type="button" value="点我" @click="isShow=!isShow"> -->
    <div v-if="true">
      <toothSelector :historyProp=test  v-model='teeth'  :maskArr="aaaaa" :showContainer="true" ref="aa" />
    </div>
    <!-- <toothSelector :historyProp=test  v-model='teeth'  :maskArr="['a1', 'b3', 'c3']" :showContainer="true" /> -->
    <!-- <toothSelector v-show='isShow' /> -->
    <div>其{{teeth}}</div>
    <div>其</div>
    <div>其他的文章内容容容</div>
    <button @click="fucking">清空</button>
    <div>其他的文章内容容容</div>
    <input type="button" value="test" @click="shit">
    <input type="button" value="test" @click="shit2">
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
      test: { "d1": [ "La", "D" ], "d2": [], "a1": [ "P" ], "a4": [ "F" ], "b2": [ "" ], "c4": [ "" ], "d<6|7>": [] },
      isShow: true,
      teeth: {},
      abc: ['a1', 'b3', 'c3']
    }
  },
  computed: {
    aaaaa() {
      return this.abc
    }
  },
  methods: {
    shit() {
      this.abc.push('a3')
    },
    fucking () {
      this.teeth = {}
    },
    shit2() {
      this.abc.push('a4')

    }
  }
}
</script>

<style lang="scss">
  // * {
  //   margin: 0;
  //   padding: 0;
  // }
  body {
    padding-left: 50px;
  }
</style>
