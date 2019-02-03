# blog
## 安装的包
> mavon-editor -> markdown相关

## ElementUI
> UI组件库

## less less-loader

## v-charts
> vue图表绘制组件，主要用在后台管理页面游客访问量的统计上
> 地址https://github.com/ElemeFE/v-charts



## 一些问题
- axios发送delete请求时传值的问题
> 当axios发送delete请求时，传值的格式应该在data中
> 然后后端通过req.body进行接收即可
> 参考https://blog.csdn.net/qq383366204/article/details/80268007
```javascript
axios.delete('/api', { data: { id: id } })
```
- element-ui中input框的键盘事件失效
> 处理方法：通过在后面加上.native修饰符，监听组件根元素的事件
> 参考：https://blog.csdn.net/k152_8747/article/details/79580797

## 对ie10、11的兼容处理
- 安装babel-polyfill
```shell
$ npm i -D babel-polyfill
```
- 将webpack-dev-server版本降级到2.7.1
```shell
$ npm i -D webpack-dev-server@2.7.1
```
- 在main.js中引入babel-polyfill
```javascript
import 'babel-polyfill'
```ie