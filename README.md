# tooth-selector

> github : https://github.com/lcylichenyi/tooth-selector

> used to select tooth（牙位选择器）
>
> 

![1556503022365](https://github.com/lcylichenyi/tooth-selector/blob/test/src/assets/1556503022365.png?raw=true)

父组件接收传出值： v-model = ""

父组件传入值： historyProp

例: 

```javascript
// 组件
<toothSelector v-show='isShow' :historyProp=test  v-model='teeth'/>


// 属性
test: {'d1': 'LaD', 'd2': '', 'a1': 'P', 'a4': 'F', 'b2': '', 'c4': '',"d<6|7>": ""}
```

传入传出值key是由 位置信息 + 牙齿信息 组成， value 表示 附带属性。(牙缝不允许有value)

例如左上方第一颗门牙，为a1，正上方牙缝，为e<1|1>

位置信息：a:左上角，b:右上角,c:左下角,d:右下角,e:中间正上方牙缝,f:中间正下方牙缝



![1556503330447](https://github.com/lcylichenyi/tooth-selector/blob/test/src/assets/1556503330447.png?raw=true)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
