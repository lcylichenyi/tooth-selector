<template>
  <div ref="sel" class="container">
    <div class="header">
      <input type="button" value="清空" />
      <input type="button" value="全口" class="active" />
      <input type="button" value="上半口" class="active" />
      <input type="button" value="下半口" class="active" />
    </div>
    <div class="body-left">
      <div class="body-left-1 clearfix">
        <div class="fl interval" v-for="i in 7" :key="i + 'a1'">
          <input type="button" class="box" :value="9 - i + '|' + (8 - i)" />
        </div>
        <div class="fl interval">
          <input type="button" class="box" value="1|1" />
        </div>
        <div class="fl interval" v-for="i in 7" :key="i + 'b1'">
          <input type="button" class="box" :value="i + '|' + (1 + i)" />
        </div>
        <br />
        <br />
        <div class="fl tooth" v-for="i in 8" :key="i + 'a2'">
          <input type="button" class="box" :value="9 - i" />
        </div>
        <div class="fl tooth" v-for="i in 8" :key="i + 'b2'">
          <input type="button" class="box" :value="i" />          
        </div>
      </div>
      <div class="line"></div>
      <div class="body-left-2 clearfix">
        <div class="fl tooth" v-for="i in 8" :key="i + 'c1'">
          <input type="button" class="box" :value="9 - i" />
        </div>
        <div class="fl tooth" v-for="i in 8" :key="i + 'd1'">
          <input type="button" class="box" :value="i" />
        </div>
        <br />
        <br />
        <div class="fl interval" v-for="i in 7" :key="i + 'c2'">
          <input type="button" class="box" :value="9 - i + '|' + (8 - i)" />
        </div>
        <div class="fl interval">
          <input type="button" class="box" value="1|1" />
        </div>
        <div class="fl interval" v-for="i in 7" :key="i + 'd2'">
          <input type="button" class="box" :value="i + '|' + (1 + i)" />
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



    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'toothSelector',
  data() {
    return {
      
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
  }
  .fl {
    float: left;
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
    box-sizing: border-box;
    width: 896px;
    height: 255px;
    padding: 20px;
    border: 1px solid #D8DCE6;
    border-radius: 5px;
    box-shadow: 0px 2px 5px #888888;
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

  }


</style>
