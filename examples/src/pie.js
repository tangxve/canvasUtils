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


ctx.beginPath()
ctx.shadowBlur = 4
ctx.shadowOffsetX = 4
ctx.shadowOffsetY = 4
ctx.shadowColor = '#333'
ctx.fillStyle = '#5c1918'
ctx.moveTo(400, 300)
ctx.arc(400, 300, 100, -Math.PI / 2, -Math.PI / 4)
ctx.fill()
ctx.closePath()

ctx.beginPath()
ctx.shadowBlur = 4
ctx.shadowOffsetX = 0
ctx.shadowOffsetY = 0
ctx.shadowColor = '#5c1918'
ctx.fillStyle = '#a32d29'
ctx.moveTo(400, 300)
ctx.arc(400, 300, 110, -Math.PI / 4, Math.PI / 4)
ctx.fill()
ctx.closePath()

ctx.beginPath()
ctx.shadowBlur = 4
ctx.shadowOffsetX = 0
ctx.shadowOffsetY = 0
ctx.shadowColor = '#a32d29'
ctx.fillStyle = '#B9332e'
ctx.moveTo(400, 300)
ctx.arc(400, 300, 120, Math.PI / 4, Math.PI * 5 / 8)
ctx.fill()
ctx.closePath()

ctx.beginPath()
ctx.shadowBlur = 4
ctx.shadowOffsetX = 0
ctx.shadowOffsetY = 0
ctx.shadowColor = '#B9332e'
ctx.fillStyle = '#842320'
ctx.moveTo(400, 300)
ctx.arc(400, 300, 130, Math.PI * 5 / 8, Math.PI)
ctx.fill()
ctx.closePath()

ctx.beginPath()
ctx.shadowBlur = 4
ctx.shadowOffsetX = 0
ctx.shadowOffsetY = 0
ctx.shadowColor = '#B9332e'
ctx.fillStyle = '#D76622'
ctx.moveTo(400, 300)
ctx.arc(400, 300, 140, Math.PI, Math.PI * 3 / 2)
ctx.fill()
ctx.closePath()

