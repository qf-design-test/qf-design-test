# Carousel 跑马灯

## 基础用法

通过carousel和carousel-item可以实现跑马灯效果, 默认为自动播放

<preview path="./carousel-base.vue" title="基础用法"></preview>

## 关闭自动播放

将`autoplay`设置为false，可以取消自动播放

<preview path="./carousel-disable-autoplay.vue" title="基础用法"></preview>

## 鼠标移入暂停

将`pause-on-hover`设置为true后，鼠标移入后会停止自动播放，鼠标移出恢复自动播放

<preview path="./carousel-pause.vue" title="基础用法"></preview>

## Carousel 字段

| 参数           | 说明                        | 类型    | 可选值 | 默认值 |
| -------------- | --------------------------- | ------- | ------ | ------ |
| autoplay       | 是否自动播放                | boolean |        | true   |
| interval       | 播放间隔                    | number  |        | 3000   |
| pause-on-hover | 鼠标hover时是否暂停自动播放 | boolean |        | false  |

## Carsouel 事件

| 事件名 | 说明                      | 类型                           |
| ------ | ------------------------- | ------------------------------ |
| change | 激活的index发生变化时触发 | (currentIndex: number) => void |
