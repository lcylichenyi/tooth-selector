<template>
  <div ref="sel" class="container">
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
            <li>5</li><li>5</li>
          </ul>
          <ul>
            <li>5</li><li>5</li>
          </ul>
        </div>
      </div>
      <div class="right-line"></div>
      <div class="right-body">
        <input class="right-box active" type="button" value="La" />
        <input class="right-box" type="button" value="B" />
        <input class="right-box" type="button" value="F" />
        <input class="right-box" type="button" value="M" />
        <input class="right-box" type="button" value="O" />
        <input class="right-box" type="button" value="D" />
        <input class="right-box" type="button" value="L" />
        <input class="right-box" type="button" value="P" />
      </div>
    </div>
    <div id="close">x</div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'toothSelector',
  data () {
    return {
      teethInfo: [
        {'name': '8|7', 'chosen': false, 'id': 1},
        {'name': '7|6', 'chosen': false, 'id': 2},
        {'name': '6|5', 'chosen': false, 'id': 3},
        {'name': '5|4', 'chosen': false, 'id': 4},
        {'name': '4|3', 'chosen': false, 'id': 5},
        {'name': '3|2', 'chosen': false, 'id': 6},
        {'name': '2|1', 'chosen': false, 'id': 7},
        {'name': '8', 'chosen': false, 'id': 8},
        {'name': '7', 'chosen': false, 'id': 9},
        {'name': '6', 'chosen': false, 'id': 10},
        {'name': '5', 'chosen': false, 'id': 11},
        {'name': '4', 'chosen': false, 'id': 12},
        {'name': '3', 'chosen': false, 'id': 13},
        {'name': '2', 'chosen': false, 'id': 14},
        {'name': '1', 'chosen': false, 'id': 15},
        {'name': '1|2', 'chosen': false, 'id': 16},
        {'name': '2|3', 'chosen': false, 'id': 17},
        {'name': '3|4', 'chosen': false, 'id': 18},
        {'name': '4|5', 'chosen': false, 'id': 19},
        {'name': '5|6', 'chosen': false, 'id': 20},
        {'name': '6|7', 'chosen': false, 'id': 21},
        {'name': '7|8', 'chosen': false, 'id': 22},
        {'name': '1', 'chosen': false, 'id': 23},
        {'name': '2', 'chosen': false, 'id': 24},
        {'name': '3', 'chosen': false, 'id': 25},
        {'name': '4', 'chosen': false, 'id': 26},
        {'name': '5', 'chosen': false, 'id': 27},
        {'name': '6', 'chosen': false, 'id': 28},
        {'name': '7', 'chosen': false, 'id': 29},
        {'name': '8', 'chosen': false, 'id': 30},
        {'name': '8', 'chosen': false, 'id': 31},
        {'name': '7', 'chosen': false, 'id': 32},
        {'name': '6', 'chosen': false, 'id': 33},
        {'name': '5', 'chosen': false, 'id': 34},
        {'name': '4', 'chosen': false, 'id': 35},
        {'name': '3', 'chosen': false, 'id': 36},
        {'name': '2', 'chosen': false, 'id': 37},
        {'name': '1', 'chosen': false, 'id': 38},
        {'name': '8|7', 'chosen': false, 'id': 39},
        {'name': '7|6', 'chosen': false, 'id': 40},
        {'name': '6|5', 'chosen': false, 'id': 41},
        {'name': '5|4', 'chosen': false, 'id': 42},
        {'name': '4|3', 'chosen': false, 'id': 43},
        {'name': '3|2', 'chosen': false, 'id': 44},
        {'name': '2|1', 'chosen': false, 'id': 45},
        {'name': '1', 'chosen': false, 'id': 46},
        {'name': '2', 'chosen': false, 'id': 47},
        {'name': '3', 'chosen': false, 'id': 48},
        {'name': '4', 'chosen': false, 'id': 49},
        {'name': '5', 'chosen': false, 'id': 50},
        {'name': '6', 'chosen': false, 'id': 51},
        {'name': '7', 'chosen': false, 'id': 52},
        {'name': '8', 'chosen': false, 'id': 53},
        {'name': '1|2', 'chosen': false, 'id': 54},
        {'name': '2|3', 'chosen': false, 'id': 55},
        {'name': '3|4', 'chosen': false, 'id': 56},
        {'name': '4|5', 'chosen': false, 'id': 57},
        {'name': '5|6', 'chosen': false, 'id': 58},
        {'name': '6|7', 'chosen': false, 'id': 59},
        {'name': '7|8', 'chosen': false, 'id': 60},
        {'name': '1|1', 'chosen': false, 'id': 61},
        {'name': '1|1', 'chosen': false, 'id': 62},
      ],
      allTeeth: false,
      topHalfTeeth: false,
      bottomHalfTeeth: false,
      isChosen: true,
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
      return this.teethInfo.filter(i => i.id >= 54 && i.id < 60)
    },
    top_center() {
      return this.teethInfo.filter(i => i.id === 61)
    },
    bottom_center() {
      return this.teethInfo.filter(i => i.id === 62)
    }
    
  },
  methods: {
    choose (e,id) {
      this.teethInfo[id - 1]['chosen'] = !this.teethInfo[id - 1]['chosen']
    },
    allTeethChosen () {
      this.allTeeth = !this.allTeeth
      this.teethInfo.map(i => { if (i.id >= 8 && i.id <= 15 || i.id >= 23 && i.id <= 30) i.chosen = this.allTeeth })
      this.teethInfo.map(i => { if (i.id >= 31 && i.id <= 38 || i.id >= 46 && i.id <= 53) i.chosen = this.allTeeth })
      this.topHalfTeeth = this.allTeeth
      this.bottomHalfTeeth = this.allTeeth
    },
    topHalfTeethChosen () {
      this.topHalfTeeth = !this.topHalfTeeth
      this.teethInfo.map(i => { if (i.id >= 8 && i.id <= 15 || i.id >= 23 && i.id <= 30) i.chosen = this.topHalfTeeth })
      this.allTeeth = this.topHalfTeeth && this.bottomHalfTeeth
    },
    bottomHalfTeethChosen () {
      this.bottomHalfTeeth = !this.bottomHalfTeeth
      this.teethInfo.map(i => { if (i.id >= 31 && i.id <= 38 || i.id >= 46 && i.id <= 53) i.chosen = this.bottomHalfTeeth })
      this.allTeeth = this.topHalfTeeth && this.bottomHalfTeeth
    },
    clear () {
      this.teethInfo.map(i => i.chosen = false)
      this.allTeeth = false
      this.topHalfTeeth = false
      this.bottomHalfTeeth = false
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
  li {
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
      background: url('../assets/tooth-black.svg') no-repeat center 6px;
      border-width: 0 !important;
    }
    &.orange input {
      color: #fff !important;
      background: url('../assets/tooth.svg') no-repeat center 6px;
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
    right: 15px;
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
    box-sizing: border-box;
    width: 896px;
    height: 255px;
    padding: 20px;
    border: 1px solid #D8DCE6;
    border-radius: 5px;
    box-shadow: 0px 2px 5px #888888;
    position: absolute;
      & > .header {
        margin-top: 10px;
        margin-left: 166px;
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


</style>
