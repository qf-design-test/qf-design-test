# 自定义主题


QF Components 默认提供一套主题，CSS 命名采用 BEM 的风格，方便使用者覆盖样式。 


## 覆盖CSS变量

QF Components 自身定义了许多的css变量，你可以定义一个`override.css`文件直接进行覆盖

```less
// override.css

// 注意这里要引入组件主题样式
@import "qf-design-test/index.css";

// 在这里覆盖全局的css变量
:root {
  --primary-color: red;
}
```
然后在入口文件`main.ts`引入该文件

```ts
// main.ts
import { createApp } from 'vue'
import QFDesign from 'qf-deign'
import './override.css'
import App from './App.vue'

const app = createApp(App)

app.use(QFDesign)
app.mount('#app')
```



## 动态设置


QF Components 默认的主题使用了`css变量`来建立主题色体系，

> 从 [CSS变量 | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) 了解更多信息


因此你可以通过代码修改`css变量`，从而达到改变主题色的效果。具体实现可以参考下面的实现

<preview path="./dynamic-theme.vue" title="动态主题色"></preview>

关于有哪些颜色变量，可以参考[这里](https://github.com/qf-design-test/qf-design-test/blob/5fddc4112a7482fd53e276aa71bf498c8f9324ea/packages/theme-chalk/src/vars.less#L3)
