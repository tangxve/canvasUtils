# Canvas

canvas 坐标 从左上角开始，往右是x轴，往下是y轴

### 高清绘制

canvas 绘制不是矢量图，在高分辨率下要缩放处理

根据 DPR 等比缩放

1. 根据 设备 dpr 等比 放大 canvas
2. 在从 css 里设置为原来的宽高
3. 考虑到 内容的缩放，因此 也需要将 ctx 缩放

获取 dpr

```js
window.devicePixelRatio  // 2
```

```html
<canvas id='myCanvass' width='1200' height='1000'
        style='width: 600px; height: 500px;'>
</canvas>
```

相当于 在 600 的物理像素里面，显示了 1200 真实像素
