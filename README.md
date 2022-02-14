# Canvas

[HTML5 <canvas> 参考手册](https://www.runoob.com/tags/ref-canvas.html)

常用的 canvas 方法

## 功能

- 初始化画布 initCanvasContext
- 绘制直线 drawLine
- 绘制填充矩形 drawfillRect
- 绘制矩形边框 drawStrokeRect
- 绘制圆角矩形
- 绘制圆环 drawStrokeCircle
- 绘制圆形 drawFillCircle
- 绘制文字 drawText
- 绘制多行文字 drawWrapText

## 使用

下载依赖：
```shell
npm i
```

运行：
```shell
yarn start:dev
```

查看例子🌰：http://localhost:1101/examples/index.html#/


### 初始化画布 initCanvasContext

initCanvasContext(options<Object>)
- options属性：
  - canvas：`<HTMLCanvasElement>` canvas 元素
  - width： `<number>` 宽度
  - height：`<number>` 高度
  - ratio：`<number>` 渲染比例，如果不传默认获取 `window.devicePixelRatio`
- 返回值：`<CanvasRenderingContext2D>` canvas 实例



## 其他

### 高清绘制

canvas 绘制不是矢量图，在高分辨率下要缩放处理

根据 DPR 等比缩放

1. 根据 设备 dpr 等比 放大 canvas
2. 在从 css 里设置为原来的宽高
3. 考虑到 内容的缩放，因此 也需要将 ctx 缩放

### 获取 dpr

```js
window.devicePixelRatio  // 2
```

```html

<canvas id='myCanvass' width='1200' height='1000'
        style='width: 600px; height: 500px;'>
</canvas>
```

相当于 在 600 的物理像素里面，显示了 1200 真实像素

