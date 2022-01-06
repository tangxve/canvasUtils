const canvas = document.getElementById('myCanvas')
const cUtil = canvasUtils.createInstance({ canvas })
const { ctx } = cUtil

// 提前设置属性
const wd = canvas.clientWidth
const ht = canvas.clientHeight
const pad = 20
const bottomPad = 20
const step = 80

// 绘制坐标系
cUtil.drawAxis({ wd, ht, pad, bottomPad, step })

// 绘制圆环
ctx.beginPath()
ctx.lineWidth = 2
ctx.strokeStyle = 'orange'
/**
 * x: 圆弧中心（圆心）的 x 轴坐标。
 * y: 圆弧中心（圆心）的 y 轴坐标。
 * radius: 圆弧的半径。
 * startAngle: 绘制起始的角度， x轴方向开始计算，单位以弧度表示。
 * endAngle: ， 绘制到的角度，不是绘制多少角度
 * anticlockwise: 可选的Boolean值 ，如果为 true，逆时针绘制圆弧，反之，顺时针绘制。
 */
// 如果绘制线，会从 绘制起始的角度开始
ctx.moveTo(200, 200)
ctx.arc(200, 200, 50, 0, Math.PI * 2, true)
ctx.stroke()
ctx.closePath()

// 绘制圆形
ctx.beginPath()
ctx.lineWidth = 2
ctx.fillStyle = 'orange'
ctx.moveTo(300, 300)
ctx.arc(300, 300, 50, 0, Math.PI / 2)
ctx.fill()
ctx.closePath()



