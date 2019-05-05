<template>
  <div style="z-index:5;position: relative">
    <div class="btn-container">
      <p v-html="eString"></p>
      <table @click="showContainer = !showContainer" class="btn">
        <tr>
          <td v-html="aString"></td><td v-html="bString"></td>
        </tr>
        <tr>
          <td v-html="cString"></td><td v-html="dString"></td>
        </tr>
      </table>
      <p v-html="fString"></p>
    </div>
    <div ref="sel" class="container" v-if="showContainer">
      <div class="header">
        <input type="button" value="清空" @click="clear" />
        <input type="button" value="全口" :class="{'active': allTeeth}" @click="allTeethChosen" />
        <input type="button" value="上半口" :class="{'active': topHalfTeeth}" @click="topHalfTeethChosen" />
        <input type="button" value="下半口" :class="{'active': bottomHalfTeeth}" @click="bottomHalfTeethChosen" />
      </div>
      <div class="body-left">
        <div class="body-left-1 clearfix">
          <div class="clearfix" id="body-left-1-line-1">
            <div class="fl interval" v-for="i in top_left_1" :key="i.id" @click="choose($event,i.id)" :class="{'orange': teethInfo[i.id - 1]['chosen'] === true}">
              <input type="button" class="box" :value="i.name" :id="i.id" />
            </div>
            <div class="fl interval" @click="choose($event,61)" :class="{'orange': teethInfo[60]['chosen'] === true}">
              <input type="button" class="box interval-middle" :value="top_center[0].name" :id="top_center[0].id" />
            </div>
            <div class="fl interval" v-for="i in top_right_1" :key="i.id" @click="choose($event,i.id)" :class="{'orange': teethInfo[i.id-1]['chosen'] === true}">
              <input type="button" class="box" :value="i.name" :id="i.id" />
            </div>
            <br />
            <br />


          </div>
          <div class="clearfix" id="body-left-1-line-2">
            <div class="fl tooth" v-for="i in top_left_2" :key="i.id"  @click="choose($event,i.id)" :class="{'orange': teethInfo[i.id - 1]['chosen'] === true}">
              <input type="button" class="box" :value="i.name" :id="i.id" />
            </div>
            <div class="y-line"></div>
            <div class="fl tooth" v-for="i in top_right_2" :key="i.id" @click="choose($event,i.id)" :class="{'orange': teethInfo[i.id - 1]['chosen'] === true}">
              <input type="button" class="box" :value="i.name" :id="i.id" />
            </div>
          </div>
        </div>
        <div class="line"></div>
        <div class="body-left-2 clearfix">
          <div class="clearfix" id="body-left-2-line-1">
            <div class="fl tooth" v-for="i in bottom_left_1" :key="i.id" @click="choose($event,i.id)" :class="{'orange': teethInfo[i.id - 1]['chosen'] === true}">
              <input type="button" class="box" :value="i.name" :id="i.id" />
            </div>
            <div class="y-line"></div>
            <div class="fl tooth" v-for="i in bottom_right_1" :key="i.id" @click="choose($event,i.id)" :class="{'orange': teethInfo[i.id - 1]['chosen'] === true}">
              <input type="button" class="box" :value="i.name" :id="i.id" />
            </div>
            <br />
            <br />
          </div>
          <div class="clearfix" id="body-left-2-line-2">
            <div class="fl interval" v-for="i in bottom_left_2" :key="i.id" @click="choose($event,i.id)" :class="{'orange': teethInfo[i.id - 1]['chosen'] === true}">
              <input type="button" class="box" :value="i.name" :id="i.id" />
            </div>
            <div class="fl interval" @click="choose($event,62)" :class="{'orange': teethInfo[61]['chosen'] === true}">
              <input type="button" class="box interval-middle" :value="bottom_center[0].name" :id="bottom_center[0].id" />
            </div>
            <div class="fl interval" v-for="i in bottom_right_2" :key="i.id" @click="choose($event,i.id)" :class="{'orange': teethInfo[i.id - 1]['chosen'] === true}">
              <input type="button" class="box" :value="i.name" :id="i.id" />
            </div>
          </div>

        </div>
      </div>
      <div class="body-right">
        <div class="right-header">
          <div class="right-header-center">
            <ul>
              <li>{{a}}</li><li>{{b}}</li>
            </ul>
            <ul>
              <li>{{c}}</li><li>{{d}}</li>
            </ul>
          </div>
        </div>
        <div class="right-line"></div>
        <div class="right-body">
          <input type="button"  class="right-box" v-for="i in locationInfo" :key="i.name" :value="i.name" @click="chooseLocation($event,i.id)" :class="{'active': locationInfo[i.id - 1]['chosen'] === true}" :title="i.title" />
        </div>
      </div>
      <div id="close" @click="showContainer = !showContainer">x</div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'toothSelector',
  data () {
    return {
      teethInfo: [
        {'name': '8|7', 'chosen': false, 'id': 1, 'location': 'a'},
        {'name': '7|6', 'chosen': false, 'id': 2, 'location': 'a'},
        {'name': '6|5', 'chosen': false, 'id': 3, 'location': 'a'},
        {'name': '5|4', 'chosen': false, 'id': 4, 'location': 'a'},
        {'name': '4|3', 'chosen': false, 'id': 5, 'location': 'a'},
        {'name': '3|2', 'chosen': false, 'id': 6, 'location': 'a'},
        {'name': '2|1', 'chosen': false, 'id': 7, 'location': 'a'},
        {'name': '8', 'chosen': false, 'id': 8, 'location': 'a'},
        {'name': '7', 'chosen': false, 'id': 9, 'location': 'a'},
        {'name': '6', 'chosen': false, 'id': 10, 'location': 'a'},
        {'name': '5', 'chosen': false, 'id': 11, 'location': 'a'},
        {'name': '4', 'chosen': false, 'id': 12, 'location': 'a'},
        {'name': '3', 'chosen': false, 'id': 13, 'location': 'a'},
        {'name': '2', 'chosen': false, 'id': 14, 'location': 'a'},
        {'name': '1', 'chosen': false, 'id': 15, 'location': 'a'},
        {'name': '1|2', 'chosen': false, 'id': 16, 'location': 'b'},
        {'name': '2|3', 'chosen': false, 'id': 17, 'location': 'b'},
        {'name': '3|4', 'chosen': false, 'id': 18, 'location': 'b'},
        {'name': '4|5', 'chosen': false, 'id': 19, 'location': 'b'},
        {'name': '5|6', 'chosen': false, 'id': 20, 'location': 'b'},
        {'name': '6|7', 'chosen': false, 'id': 21, 'location': 'b'},
        {'name': '7|8', 'chosen': false, 'id': 22, 'location': 'b'},
        {'name': '1', 'chosen': false, 'id': 23, 'location': 'b'},
        {'name': '2', 'chosen': false, 'id': 24, 'location': 'b'},
        {'name': '3', 'chosen': false, 'id': 25, 'location': 'b'},
        {'name': '4', 'chosen': false, 'id': 26, 'location': 'b'},
        {'name': '5', 'chosen': false, 'id': 27, 'location': 'b'},
        {'name': '6', 'chosen': false, 'id': 28, 'location': 'b'},
        {'name': '7', 'chosen': false, 'id': 29, 'location': 'b'},
        {'name': '8', 'chosen': false, 'id': 30, 'location': 'b'},
        {'name': '8', 'chosen': false, 'id': 31, 'location': 'c'},
        {'name': '7', 'chosen': false, 'id': 32, 'location': 'c'},
        {'name': '6', 'chosen': false, 'id': 33, 'location': 'c'},
        {'name': '5', 'chosen': false, 'id': 34, 'location': 'c'},
        {'name': '4', 'chosen': false, 'id': 35, 'location': 'c'},
        {'name': '3', 'chosen': false, 'id': 36, 'location': 'c'},
        {'name': '2', 'chosen': false, 'id': 37, 'location': 'c'},
        {'name': '1', 'chosen': false, 'id': 38, 'location': 'c'},
        {'name': '8|7', 'chosen': false, 'id': 39, 'location': 'c'},
        {'name': '7|6', 'chosen': false, 'id': 40, 'location': 'c'},
        {'name': '6|5', 'chosen': false, 'id': 41, 'location': 'c'},
        {'name': '5|4', 'chosen': false, 'id': 42, 'location': 'c'},
        {'name': '4|3', 'chosen': false, 'id': 43, 'location': 'c'},
        {'name': '3|2', 'chosen': false, 'id': 44, 'location': 'c'},
        {'name': '2|1', 'chosen': false, 'id': 45, 'location': 'c'},
        {'name': '1', 'chosen': false, 'id': 46, 'location': 'd'},
        {'name': '2', 'chosen': false, 'id': 47, 'location': 'd'},
        {'name': '3', 'chosen': false, 'id': 48, 'location': 'd'},
        {'name': '4', 'chosen': false, 'id': 49, 'location': 'd'},
        {'name': '5', 'chosen': false, 'id': 50, 'location': 'd'},
        {'name': '6', 'chosen': false, 'id': 51, 'location': 'd'},
        {'name': '7', 'chosen': false, 'id': 52, 'location': 'd'},
        {'name': '8', 'chosen': false, 'id': 53, 'location': 'd'},
        {'name': '1|2', 'chosen': false, 'id': 54, 'location': 'd'},
        {'name': '2|3', 'chosen': false, 'id': 55, 'location': 'd'},
        {'name': '3|4', 'chosen': false, 'id': 56, 'location': 'd'},
        {'name': '4|5', 'chosen': false, 'id': 57, 'location': 'd'},
        {'name': '5|6', 'chosen': false, 'id': 58, 'location': 'd'},
        {'name': '6|7', 'chosen': false, 'id': 59, 'location': 'd'},
        {'name': '7|8', 'chosen': false, 'id': 60, 'location': 'd'},
        {'name': '1|1', 'chosen': false, 'id': 61, 'location': 'e'},
        {'name': '1|1', 'chosen': false, 'id': 62, 'location': 'f'},
      ],
      locationInfo: [
        {'name': 'La', 'id': 1, 'chosen': false, 'title': '唇面'},
        {'name': 'B', 'id': 2, 'chosen': false, 'title': '颊面'},
        {'name': 'F', 'id': 3, 'chosen': false, 'title': '唇面颊面'},
        {'name': 'M', 'id': 4, 'chosen': false, 'title': '近中面'},
        {'name': 'O/I', 'id': 5, 'chosen': false, 'title': '颌面/切缘'},
        {'name': 'D', 'id': 6, 'chosen': false, 'title': '远中面'},
        {'name': 'L', 'id': 7, 'chosen': false, 'title': '舌侧'},
        {'name': 'P', 'id': 8, 'chosen': false, 'title': '腭侧'},
      ], 
      intervalId: [1, 2, 3, 4, 5, 6, 7, 16, 17, 18, 19, 20, 21, 22, 39, 40, 41, 42, 43, 44, 45, 54, 55, 56, 57, 58, 59, 60, 61, 62],
      titleI: [13, 14, 15, 23, 24, 25, 36, 37, 38, 46, 47, 48],
      titleO: [8, 9, 10, 11, 12, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 49, 50, 51, 52, 53],
      allTeeth: false,
      topHalfTeeth: false,
      bottomHalfTeeth: false,
      // history: this.historyProp,
      history: '',
      a: '',
      b: '',
      c: '',
      d: '',
      historyChangeFlag: true,
      aString: '',
      bString: '',
      cString: '',
      dString: '',
      eString: '',
      fString: '',
      showContainer: false,
      once: true,
    }
  },
  props: {
    historyProp: {
      type: Object,
      default: () => {}
    },
    value: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    top_left_1() {
      return this.teethInfo.filter(i => i.id < 8)
    },
    top_left_2() {
      return this.teethInfo.filter(i => i.id >= 8 && i.id < 16)
    },
    top_right_1() {
      return this.teethInfo.filter(i => i.id >= 16 && i.id < 23)
    },
    top_right_2() {
      return this.teethInfo.filter(i => i.id >= 23 && i.id < 31)
    },
    bottom_left_1() {
      return this.teethInfo.filter(i => i.id >= 31 && i.id < 39)
    },
    bottom_left_2() {
      return this.teethInfo.filter(i => i.id >= 39 && i.id < 46)
    },
    bottom_right_1() {
      return this.teethInfo.filter(i => i.id >= 46 && i.id < 54)
    },
    bottom_right_2() {
      return this.teethInfo.filter(i => i.id >= 54 && i.id < 61)
    },
    top_center() {
      return this.teethInfo.filter(i => i.id === 61)
    },
    bottom_center() {
      return this.teethInfo.filter(i => i.id === 62)
    },
  },
  methods: {
    choose (e, id) {
      const flag = this.teethInfo[id - 1]['chosen'] = !this.teethInfo[id - 1]['chosen']
      let name = this.teethInfo[id - 1]['name'].length < 2 ? this.teethInfo[id - 1]['name'] : '<' + this.teethInfo[id - 1]['name'] + '>'
      name = this.teethInfo[id - 1]['location'] + name
      this.updateHistory(name, flag)
      this.clearLocation()
      this.changeHistoryChangeFlag()
      this.changeTitle(id, flag)
      if (this.intervalId.includes(id)) {
        this.hideCordinate()
        return
      }
      this.displayCordinate(name, flag)
    },
    chooseLocation (e, id) {
      if (this.history.size !== 0) {
        const lastKey = [...this.history.keys()].pop()
        if (lastKey.length < 3) {
          let lastValue = [...this.history.values()].pop()
          lastValue = lastValue === '' ? '' : lastValue
          const flag = this.locationInfo[id - 1]['chosen'] = !this.locationInfo[id - 1]['chosen']
          const name = this.locationInfo[id - 1]['name']
          this.updateLocation(lastKey, lastValue, name, flag)
        }

      }
      this.changeHistoryChangeFlag()
    },
    allTeethChosen () {
      this.allTeeth = !this.allTeeth
      this.teethInfo.map(i => { 
        if (i.id >= 8 && i.id <= 15 || i.id >= 23 && i.id <= 30) { 
          i.chosen = this.allTeeth
          if (this.allTeeth) {
            this.updateHistory(i.location + i.name, this.allTeeth)
          } else {
            this.updateHistory(i.location + i.name, this.allTeeth)
          }
        } 
      })
      this.teethInfo.map(i => { 
        if (i.id >= 31 && i.id <= 38 || i.id >= 46 && i.id <= 53) { 
          i.chosen = this.allTeeth
          if (this.allTeeth) {
            this.updateHistory(i.location + i.name, this.allTeeth)
          } else {
            this.updateHistory(i.location + i.name, this.allTeeth)
          }
        } 
      })
      this.clearLocation()
      this.hideCordinate()
      this.topHalfTeeth = this.allTeeth
      this.bottomHalfTeeth = this.allTeeth
      this.changeHistoryChangeFlag()
    },
    topHalfTeethChosen () {
      this.topHalfTeeth = !this.topHalfTeeth
      this.teethInfo.map(i => { 
        if (i.id >= 8 && i.id <= 15 || i.id >= 23 && i.id <= 30) { 
          i.chosen = this.topHalfTeeth
          this.updateHistory(i.location + i.name, this.topHalfTeeth)
        } 
      })
      this.allTeeth = this.topHalfTeeth && this.bottomHalfTeeth
      this.hideCordinate()
      this.changeHistoryChangeFlag()
    },
    bottomHalfTeethChosen () {
      this.bottomHalfTeeth = !this.bottomHalfTeeth
      this.teethInfo.map(i => { 
        if (i.id >= 31 && i.id <= 38 || i.id >= 46 && i.id <= 53) { 
          i.chosen = this.bottomHalfTeeth
          this.updateHistory(i.location + i.name, this.bottomHalfTeeth)
        } 
      })
      this.allTeeth = this.topHalfTeeth && this.bottomHalfTeeth
      this.hideCordinate()
      this.changeHistoryChangeFlag()
    },
    clear () {
      this.teethInfo.map(i => i.chosen = false)
      this.allTeeth = false
      this.topHalfTeeth = false
      this.bottomHalfTeeth = false
      this.clearHistory()
      this.clearLocation()
      this.hideCordinate()
      this.changeHistoryChangeFlag()
    },
    updateHistory (data, flag = true) {
      if (flag) {
        this.history.set(data, '')
      } else {
        this.history.delete(data)
      }

    },
    clearHistory () {
      this.history.clear()
    },
    updateLocation (lastKey, oldLocation, newLocation, flag = true) {
      let loc
      if (flag) {
        loc = oldLocation + newLocation
        this.history.set(lastKey, loc)
      } else {
        if (newLocation === 'L') {
          let temp = oldLocation.replace('La', '!')
          // console.log(temp)
          loc = temp.replace(newLocation, '').replace('!', 'La')
        } else {
          loc = oldLocation.replace(newLocation, '')
        }
        this.history.set(lastKey, loc)
      }
    },
    clearLocation () {
      this.locationInfo.map(i => i.chosen = false)
    },
    displayCordinate (name, flag) {
      if (name.length < 3 && flag) {
        const nameArr = [...name]
        const positionInfo = nameArr.shift()
        const newName = nameArr.join('')
        switch (positionInfo) {
          case 'a': this.a = newName; this.b = this.c = this.d = '' ; break;
          case 'b': this.b = newName; this.a = this.c = this.d = ''; break;
          case 'c': this.c = newName; this.a = this.b = this.d = ''; break;
          case 'd': this.d = newName; this.a = this.b = this.c = ''; break;
        }
      } else if (name.length > 3) {
        return
      } else {
        this.hideCordinate()
      }
    },
    hideCordinate () {
      this.a = this.b = this.c = this.d = ''
    },
    changeHistoryChangeFlag () {
      this.historyChangeFlag = !this.historyChangeFlag
    },
    changeTitle (id, flag) {
      
      if (flag) {
        if (this.titleI.includes(id)) {
          this.locationInfo[4] = {'name': 'I', 'id': 5, 'chosen': false, 'title': '切缘'}
        } else if (this.titleO.includes(id)) {
          this.locationInfo[4] = {'name': 'O', 'id': 5, 'chosen': false, 'title': '颌面'}
        } else {
          this.locationInfo[4] = {'name': 'O/I', 'id': 5, 'chosen': false, 'title': '颌面/切缘'}
        }
      } else {
        let lastKey = [...this.history.keys()].pop()
        if (lastKey && lastKey.length < 3) {
          let num = lastKey.slice(1)
          if (num <= 3) {
            this.locationInfo[4] = {'name': 'I', 'id': 5, 'chosen': false, 'title': '切缘'}
          } else {
            this.locationInfo[4] = {'name': 'O', 'id': 5, 'chosen': false, 'title': '颌面'}
          }
        } else {
          this.locationInfo[4] = {'name': 'O/I', 'id': 5, 'chosen': false, 'title': '颌面/切缘'}
        }
      }
    },
    objToStrMap (obj) {
      let strMap = new Map();
      for (let k of Object.keys(obj)) {
        strMap.set(k, obj[k]);
      }
      return strMap;
    },
    strMapToOutput (strMap) {
      let obj = {};
      for (let [k,v] of strMap) {
        obj[k] = this.outputStringtoArray(v);
      }
      return obj;
    },
    inputArraytoString (obj) {
      const newObj = {}
      for (let i in obj) {
        newObj[i] = obj[i].join('')
      }
      return newObj
    },
    outputStringtoArray (val) {
      let str = ''
      let arr = []
      if (val) {
        for(let i=0; i<val.length; i++) {
          if(val[i] === 'L' && val[i+1] === 'a' ) {
            str += val[i]
            continue
          }
          str += val[i] + ','
        }
      }
      arr = str.split(',')
      if(arr[arr.length - 1] === '') {
        arr.pop()
      }
      return arr
    },
    toFather (history) {
      // 触发v-model
      if (typeof history === 'object') {
        const output = this.strMapToOutput(history)
        this.$emit('input', output)
      }
    }
  },
  watch: {
    historyChangeFlag: {
      handler(newVal) {
        // 只运行一次
        if (this.once) {
          this.once = false
          if (this.historyProp === undefined) return
          if (!this.historyProp['get'] && typeof this.historyProp === 'object') {
            this.history = this.objToStrMap(this.historyProp)
          } else {
            this.history = this.historyProp
          }
        }
        let arr1 = []
        let arr2 = []
        let arr3 = []
        let arr4 = []
        this.aString = this.bString = this.cString = this.dString = this.eString = this.fString = ''
        this.history.forEach((val,key) => 
        {
          if (key.includes('a')) {
            arr1.push(`<span>${key}<sup>${val}</sup></span>`)
            this.aString = arr1.join(',').replace(/a/g, '')
          }
          if (key.includes('b')) {
            arr2.push(`<span>${key}<sup>${val}</sup></span>`)
            this.bString = arr2.join(',').replace(/b/g, '')
          }
          if (key.includes('c')) {
            arr3.push(`<span>${key}<sup>${val}</sup></span>`)
            this.cString = arr3.join(',').replace(/c/g, '')
          }
          if (key.includes('d')) {
            arr4.push(`<span>${key}<sup>${val}</sup></span>`)
            this.dString = arr4.join(',').replace(/d/g, '')
          }
          if (key.includes('e')) {
            this.eString = '<1|1>'
          }
          if (key.includes('f')) {
            this.fString = '<1|1>'
          }
        })
        this.toFather(this.history)
        // console.log(this.history)
      },
      immediate: true
    }
  },
  mounted() {
    // 从后台获取数值
    // 将对象转化为Map

    let historyPropBackup
    if (this.historyProp && typeof this.historyProp === 'object') {
      historyPropBackup = this.inputArraytoString(this.historyProp)
      historyPropBackup = this.objToStrMap(historyPropBackup)
    } else {
      historyPropBackup = new Map()
    }
    
    this.history = historyPropBackup
    if (historyPropBackup) {
      let compareArr = []
      this.teethInfo.forEach((i) => {
        if (i.name.length > 2 ) {
          compareArr.push(i.location + '<' + i.name + '>')
        } else {
          compareArr.push(i.location + i.name)
        }
      })

      this.history = historyPropBackup
      for(let i = 0; i < compareArr.length; i++) {
        if (historyPropBackup.get(compareArr[i]) !== undefined) {
          this.historyChangeFlag = !this.historyChangeFlag
          this.teethInfo[i]['chosen'] = true
        }
      }
    }

  },
}
</script>

<style scoped lang='scss'>
  .clearfix:after {
    visibility:hidden;
    display:block;
    font-size:0;
    content: " ";
    clear:both;
    height:0;
  }
  .clearfix {
    *zoom:1;
  }
  li, td, tr, div, ul, table, tbody {
    margin: 0;
    padding: 0;
  }
  input {
    &:hover {
      cursor: pointer;
    }
    &:focus {
      outline: none;
    }
  }
  .fl {
    float: left;
  }
  #body-left-1-line-1 {
    margin-left: 23px;
  }
  #body-left-2-line-2 {
    margin-top: 10px;
    margin-left: 23px;
  }

  .tooth {
    margin-right: 5px;
    & input {
      background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjI5cHgiIGhlaWdodD0iMjlweCIgdmlld0JveD0iMCAwIDI5IDI5IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTEuMyAoNTc1NDQpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPg0KICAgIDx0aXRsZT5Hcm91cCA1PC90aXRsZT4NCiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4NCiAgICA8ZGVmcz48L2RlZnM+DQogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+DQogICAgICAgIDxnIGlkPSLku7vliqEt5ZKo6K+i5Lu75YqhLS3nlLPor7dY5YWJ5qOA5p+lIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDA3LjAwMDAwMCwgLTU5NS4wMDAwMDApIiBmaWxsPSIjQzFDMUMxIiBzdHJva2U9IiNDMUMxQzEiIHN0cm9rZS13aWR0aD0iMC41Ij4NCiAgICAgICAgICAgIDxnIGlkPSJHcm91cC00MiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTIuMDAwMDAwLCA0ODcuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTM4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOS4wMDAwMDAsIDY4LjAwMDAwMCkiPg0KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMzQtQ29weS05IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMzcuMDAwMDAwLCA0MS4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC01Ij4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iQ29tYmluZWQtU2hhcGUiPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTMuNTYxMzk3NywxOC4xNDg5NjM0IEMxNi4xNjEwMzc0LDE4LjE0ODk2MzQgMTYuMjMzODc1NywyMC42MjcwMzIgMTYuMzA2NzYxNSwyMi44MTM2OTk4IEMxNi4zNzk1OTk4LDI1LjA3MzAxNjIgMTYuNTI1NDY2MywyNi40MzM1NTA0IDE3Ljk4MzEzNDEsMjYuNDMzNTUwNCBDMjAuMTY5ODAxOSwyNi40MzM1NTA0IDI0LjI1MTM1NzMsMTguOTAyMDY4OSAyNS44MzA1MDE0LDEzLjA0Njk1OTkgQzI3LjE2NjY5Myw4LjA5MDY4MDQ5IDI2LjcwNTEzMDYsMi4yNTk4NjY3OCAyMS40MzMwMTI4LDAuODUwNzg5NDU1IEMxOS4xNzM2OTY1LDAuMjQzMzYwNjMzIDE3LjEwODU5OTgsMC43MjkyMTgyNzggMTUuMzM0OTAzOSwyLjMzMjcwNTEgQzE0LjMxNDUwMzIsMy4yMzE2NzY5OCAxMi43ODM5OTcsMy4yMzE2NzY5OCAxMS43NjM1OTYzLDIuMzMyNzA1MSBDOS45OTAwOTAxNiwwLjcyOTIxODI3OCA3Ljk0OTMzNjIsMC4yNDMzNjA2MzMgNS42NjU1MzQ4LDAuODUwNzg5NDU1IEMwLjM5MzM2OTU5NiwyLjI1OTg2Njc4IC0wLjA2ODE0NTM0MjcsOC4wNjY0MzI2OSAxLjI2ODA5MzY3LDEzLjA0Njk1OTkgQzIuODIyODQ3NjMsMTguOTAyMDY4OSA2LjkyODc0NTY5LDI2LjQzMzU1MDQgOS4xMTU0MTM1MywyNi40MzM1NTA0IEMxMC41NzMwODE0LDI2LjQzMzU1MDQgMTAuNzE4OTQ3OCwyNS4wNzMwMTYyIDEwLjc5MTc4NjEsMjIuODEzNjk5OCBDMTAuODY0NjI0NCwyMC42MjcwMzIgMTAuOTYxNzU4LDE4LjE0ODk2MzQgMTMuNTYxMzk3NywxOC4xNDg5NjM0IE0xNy45ODMxMzQxLDI2Ljk5MjM4ODggQzE1Ljg2OTQ5NDQsMjYuOTkyMzg4OCAxNS43OTY2NTYxLDI0Ljc4MTQyNTcgMTUuNzIzNzcwMywyMi44MTM2OTk4IEMxNS42MjY1NDE4LDIwLjMzNTQ0MTUgMTUuNDMyMjI3MiwxOC43MDc2MTIgMTMuNTM3MTAyNSwxOC43MDc2MTIgQzExLjY0MjAyNTEsMTguNzA3NjEyIDExLjQ0Nzc1OCwyMC4zMzU0NDE1IDExLjM1MDYyNDQsMjIuODEzNjk5OCBDMTEuMjc3NTk2MywyNC43ODE0MjU3IDExLjIwNDc1OCwyNi45OTIzODg4IDkuMDkxMTE4MjgsMjYuOTkyMzg4OCBDNi4zNzAwNDk3NCwyNi45OTIzODg4IDIuMTkxMTcxLDE4LjczMjA5NyAwLjY4NDk2MDEwNSwxMy4xNjgzODg4IEMtMS4xMTI4NDEzLDYuNDg3MTQ2MjIgMC43MzM1MDMxNjMsMS41NTUzMDQzOSA1LjQ5NTM3MzExLDAuMjY3NjU1ODg4IEM3LjkyNDg1MTE0LC0wLjM4ODM2MzQ0NSAxMC4yMDg2NTI1LDAuMTcwNTY5NzcyIDEyLjEyODAyNTEsMS44NzExOTAxNiBDMTIuOTI5NzIxMSwyLjU3NTc1MjU1IDE0LjEyMDIzNiwyLjU3NTc1MjU1IDE0LjkyMTkzMiwxLjg3MTE5MDE2IEMxNi44MTcwMDkzLDAuMTcwNTY5NzcyIDE5LjEyNTEwNiwtMC4zODgzNjM0NDUgMjEuNTU0NTg0LDAuMjY3NjU1ODg4IEMyNi4zMTY0NTQsMS41MzEwNTY1OSAyOC4xMzg1MDMyLDYuNDg3MTQ2MjIgMjYuMzY0OTk3LDEzLjE2ODM4ODggQzI0Ljg4MzA4MTQsMTguNzMyMDk3IDIwLjcwNDE1NTIsMjYuOTkyMzg4OCAxNy45ODMxMzQxLDI2Ljk5MjM4ODggWiI+PC9wYXRoPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgICAgICAgICAgPC9nPg0KICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgIDwvZz4NCiAgICAgICAgPC9nPg0KICAgIDwvZz4NCjwvc3ZnPg==') no-repeat center 6px;
      border-width: 0 !important;
    }
    &.orange input {
      color: #fff !important;
      background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjI4cHgiIGhlaWdodD0iMjdweCIgdmlld0JveD0iMCAwIDI4IDI3IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTEuMyAoNTc1NDQpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPg0KICAgIDx0aXRsZT5Hcm91cCA1PC90aXRsZT4NCiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4NCiAgICA8ZGVmcz48L2RlZnM+DQogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+DQogICAgICAgIDxnIGlkPSLku7vliqEt5ZKo6K+i5Lu75YqhLS3nlLPor7dY5YWJ5qOA5p+lIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzUxLjAwMDAwMCwgLTU5Ni4wMDAwMDApIiBmaWxsPSIjRUY4MjAwIj4NCiAgICAgICAgICAgIDxnIGlkPSJHcm91cC00MiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTIuMDAwMDAwLCA0ODcuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTM4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOS4wMDAwMDAsIDY4LjAwMDAwMCkiPg0KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMzQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCA0MS4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC0zNC1Db3B5LTciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI4MC4wMDAwMDAsIDAuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTUiPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iQ29tYmluZWQtU2hhcGUiPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTI2LjM4NjAxNzksMTMuMDg4NjM1NiBDMjYuMDk4NTM4LDE0Ljg5MzQ1NDQgMjUuNTQ4OTY3LDE2LjczNjY2MjYgMjQuNTE3MzI1OSwxOC4zNzQxODA3IEMyMi42MDExODc5LDIyLjc5ODI0MjEgMTkuOTIyMDM2OCwyNi45OTIzODg4IDE3Ljk4MzEzNDEsMjYuOTkyMzg4OCBDMTcuNzAzNzkwNywyNi45OTIzODg4IDE3LjQ2MDA5MzcsMjYuOTUzNzcwMiAxNy4yNDczMzE5LDI2Ljg4MjE5ODQgQzE2LjkwMjY2MTksMjYuOTMzMzA5MyAxNi42NTA1NzI5LDI2Ljg1NzUxNDUgMTYuNjAxODM5MSwyNi40ODY5OTk5IEMxNS44MjY5MTA0LDI1LjcyMDY4MDYgMTUuNzc1MzUyMiwyNC4yMDYyNzczIDE1LjcyMzc3MDMsMjIuODEzNjk5OCBDMTUuNjM1MTc5MSwyMC41NTU1OTY3IDE1LjQ2NTk4NDgsMTkuMDAzNTM4NSAxNC4wMDMwMTg3LDE4Ljc0NTYwNTUgTDEzLjA3MTE5ODksMTguNzQ1NjA1NSBDMTIuOTg1MTg2MywxOC43NjA3NzA3IDEyLjkwMzY0NiwxOC43ODA0MDk1IDEyLjgyNjMzMTUsMTguODA0NDAyNCBMMTEuODg3MjgyMSwxOS41ODYwMDQgQzExLjQ4OTk0MDUsMjAuMzAzODgxNSAxMS40MDUwNDAyLDIxLjQyNTM0MDcgMTEuMzUwNjI0NCwyMi44MTM2OTk4IEMxMS4yNzc1OTYzLDI0Ljc4MTQyNTcgMTEuMjA0NzU4LDI2Ljk5MjM4ODggOS4wOTExMTgyOCwyNi45OTIzODg4IEM2LjM3MDA0OTc0LDI2Ljk5MjM4ODggMi4xOTExNzEsMTguNzMyMDk3IDAuNjg0OTYwMTA1LDEzLjE2ODM4ODggQy0xLjExMjg0MTMsNi40ODcxNDYyMiAwLjczMzUwMzE2MywxLjU1NTMwNDM5IDUuNDk1MzczMTEsMC4yNjc2NTU4ODggQzcuOTI0ODUxMTQsLTAuMzg4MzYzNDQ1IDEwLjIwODY1MjUsMC4xNzA1Njk3NzIgMTIuMTI4MDI1MSwxLjg3MTE5MDE2IEMxMi45Mjk3MjExLDIuNTc1NzUyNTUgMTQuMTIwMjM2LDIuNTc1NzUyNTUgMTQuOTIxOTMyLDEuODcxMTkwMTYgQzE2LjgxNzAwOTMsMC4xNzA1Njk3NzIgMTkuMTI1MTA2LC0wLjM4ODM2MzQ0NSAyMS41NTQ1ODQsMC4yNjc2NTU4ODggQzI2LjI5NzQ4NzEsMS41MjYwMjQzOSAyOC4xMjM5NDE5LDYuNDQ3NzI0MDEgMjYuMzg2MDE3OSwxMy4wODg2MzU2IFoiPjwvcGF0aD4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgICAgICAgICAgPC9nPg0KICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgIDwvZz4NCiAgICAgICAgPC9nPg0KICAgIDwvZz4NCjwvc3ZnPg==') no-repeat center 6px;
    }
  }
  .y-line {
    width: 16px;
    height: 10px;
    float: left;
    position: relative;
    &:after {
      content: '';
      z-index: -1;
      top: -5px;
      width: 2px;
      left: 5px;
      height: 70px;
      position: absolute;
      background-color: #C1C1C1;
    }
  }
  .interval {
    margin-right: 10px;
    & > input {
      width: 30px !important;
    }
    &.orange {
      & input {
        background-color: #EF8200 !important;
        color: #fff !important;
      }
      &:after {
        background-color: #EF8200 !important;
      }
    }
  }
  .interval-middle {
    margin-left: 8px;
    margin-right: 6px;
  }
  #close {
    position: absolute;
    font-size: 20px;
    width: 30px;
    text-align: center;
    right: 10px;
    top: 10px;
    color: #888888;
    &:hover {
      cursor: pointer;
    }
  }


  @mixin normalBox () {
    box-sizing: border-box;
    width: 35px;
    height: 35px;
    border: 1px solid #D8DCE6;
    background-color: #fff;
    text-align: center;
    color: #5F5F5F;
  }
  
  .container {
    // left: 25px;
    background-color: white;
    box-sizing: border-box;
    width: 896px;
    height: 255px;
    padding: 20px;
    border: 1px solid #D8DCE6;
    border-radius: 5px;
    box-shadow: 0px 2px 5px #888888;
    position: absolute;
    left: 4px;
    top: 130px;
    z-index: 5;
      & > .header {
        text-align: left;
        margin-top: 10px;
        padding-left: 166px;
        height: 35px;
        & > input{
          @include normalBox();
          width: 74px;
          height: 25px;
          padding-top: 0;
          padding-bottom: 0;
          border-radius: 5px;
          color: #5F5F5F;
          margin-right: 5px;
          &.active {
            border-color: #EF8200;
            color: #EF8200;
          }
        }
      }

      & > .body-left {
        float: left;

        & .box {
          @include normalBox();
        }
        & .tooth {
          position: relative;
        }
        & .body-left-1 {
          & .interval {
            position: relative;
            input {
              padding-top: 0px;
              height: 25px;
              line-height: 25px;
              border-radius: 5px;
            }
            &:after {
              content: "";
              height: 17px;
              width: 4px;
              position: absolute;
              border: 1px solid #D8DCE6;
              border-bottom-right-radius: 15px;
              border-bottom-left-radius: 15px;
              z-index: 3;
              right: 50% - 10;
              top: 100% - 5;
              border-top-width: 0px;
              background-color: #fff;
            }
          }
        }

        & .body-left-2 {
          & .interval {
            position: relative;
            input {
              padding-top: 0px;
              height: 25px;
              line-height: 25px;
              border-radius: 5px;
            }
            &:after {
              content: "";
              height: 17px;
              width: 4px;
              position: absolute;
              border: 1px solid #D8DCE6;
              border-top-right-radius: 15px;
              border-top-left-radius: 15px;
              z-index: 3;
              right: 50% - 10;
              bottom: 100% - 5;
              border-bottom-width: 0px;
              background-color: #fff;
            }
          }
        }

        & > .line {
          width: 644px;
          margin-top: 10px;
          margin-bottom: 10px;
          height: 2px;
          background-image: linear-gradient(to right, #D8DCE6 0%, #D8DCE6 50%, transparent 50%);
          background-size: 11px 2px;
          background-repeat: repeat-x;
        }
      }
      & > .body-right {
        box-sizing: border-box;
        float: right;
        height: 210px;
        width: 172px;
        border: 1px solid #D8DCE6;
        margin-right: 24px;
        border-radius: 3px;
        margin-top: -40px;
        padding: 10px;
        & > .right-header {
          box-sizing: border-box;
          height: 44px;
          padding-left: 59px;
          padding-right: 59px;
          padding-bottom: 10px;
          padding-top: 10px;
          & > .right-header-center {
            height: 32px;
            box-sizing: border-box;
            > ul {
              &:first-child {
                line-height: 10px;
                & > li {
                  &:first-child {
                    border-right: 2px solid #979797;
                    border-bottom: 2px solid #979797;
                  }
                  &:last-child {
                    border-bottom: 2px solid #979797;
                }  
                }
              }
              &:last-child {
                line-height: 20px;
                & > li {
                  &:first-child {
                    border-right: 2px solid #979797;
                  }  
                }
              }
              > li {
                box-sizing: border-box;
                float: left;
                list-style: none;
                width: 16px;
                height: 16px;
                font-size: 14px;
                text-align: center;
                color: #979797;
              }
            }
          }
        }
        & > .right-line {
          width: 151px;
          margin-top: 10px;
          margin-bottom: 20px;
          height: 2px;
          background-image: linear-gradient(to right, #D8DCE6 0%, #D8DCE6 50%, transparent 50%);
          background-size: 11px 2px;
          background-repeat: repeat-x;
        }
        & > .right-body {
          text-align: center;
          & > input {
            box-sizing: border-box;
            border: 1px solid #D8DCE6;
            background-color: #fff;
            color: #5F5F5F;
            width: 44px;
            height: 30px;
            border-radius: 5px;
            line-height: 30px;
            margin-bottom: 10px;
            margin-right: 3px;
            margin-left: 3px;
            &.active {
              border-color: #EF8200;
              color: #EF8200;
            }
          }
        }
      }
    &:before {
      content: '';
      width: 10px;
      height: 10px;
      position: absolute;
      top: -6px;
      left: 110px;
      transform: rotateZ(45deg);
      z-index: 22;
      background-color: #fff;
      border-top : 1px solid #D8DCE6;
      border-left: 1px solid #D8DCE6;
      box-shadow: -1px -1px 1px -1px  #888888;
    }
  }

  .btn {
    font-size: 12px;
    border-collapse: collapse;
    width: 210px;
    min-height: 60px;
    & tr {
      height: 30px;
      min-height: 30px;
      word-break: normal;
      &:first-child {
        border-bottom: 1px solid #5F5F5F;
      }
      & td {
        box-sizing: border-box;
        width: 50%;
        max-width: 105px;
      }
      &:first-child {
        td {
          &:first-child {
            padding-right: 5px;
            border-right: 1px solid #5F5F5F;
            text-align: right;
          }
          &:last-child {
            padding-left: 5px;
            text-align: left;
          }
        }
      }
      &:last-child {
        td {
          &:first-child {
            padding-right: 5px;
            border-right: 1px solid #5F5F5F;
            text-align: right;
          }
          &:last-child {
            padding-left: 5px;
            text-align: left;
          }
        }
      }
    }
  }
  
  .btn-container {
    cursor: pointer;
    width: 210px;
    > p {
      font-size: 12px;
      text-align: center;
      height: 10px;
    }
  }


</style>
