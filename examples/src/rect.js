const canvas = document.getElementById('myCanvas')

const ctx = canvasUtils.initCanvasContext({ canvas })

// 提前设置属性
const wd = canvas.clientWidth
const ht = canvas.clientHeight
const pad = 20
const bottomPad = 50
const step = 80

// 绘制坐标系
canvasUtils.drawAxis({ wd, ht, pad, bottomPad, step, ctx })

canvasUtils.drawRectForFill(ctx, 50, 50, 50, 50)
// canvasUtils.drawRectForFill({ ctx, x: 50, y: 50 })
canvasUtils.drawRectForStroke({ ctx })
canvasUtils.drawfillRect({ ctx })
canvasUtils.drawStrokeRect({ ctx })

// // 绘制矩形：描边 + 填充
// ctx.beginPath()
// // 描边
// ctx.lineWidth = 5
// ctx.strokeStyle = 'orange'
// // 填充
// ctx.fillStyle = 'hotpink'
// // 矩形
// ctx.rect(100, 100, 100, 100)
// ctx.fill()  // 绘制矩形 注意顺序
// ctx.stroke()  // 绘制线
// ctx.closePath()
//
// // 只是描边
// ctx.beginPath()
// ctx.lineWidth = 4
// ctx.strokeStyle = 'seagreen'
// ctx.strokeRect(220, 100, 100, 100)
// ctx.closePath()
//
// // 只是填充
// ctx.beginPath()
// ctx.fillStyle = 'skyblue'
// ctx.fillRect(340, 100, 100, 100)
// ctx.closePath()




