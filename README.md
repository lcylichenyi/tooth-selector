# tooth-selector

> used to select tooth（牙位选择器）
>
> ![1556503022365](C:\Users\dell\AppData\Roaming\Typora\typora-user-images\1556503022365.png)



父组件接收传出值： v-model = ""

父组件传入值： historyProp

例: 

```javascript
// 组件
<toothSelector v-show='isShow' :historyProp=test  v-model='teeth'/>


// 属性
test: {'d1': 'LaD', 'd2': '', 'a1': 'P', 'a4': 'F', 'b2': '', 'c4': ''}
```



![1556503330447](C:\Users\dell\AppData\Roaming\Typora\typora-user-images\1556503330447.png)

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
