const canvas = document.getElementById('myCanvas')
console.log('canvasUtils', canvasUtils)
const cUtil = canvasUtils.createInstance({ canvas })
const { ctx } = cUtil

// 提前设置属性
const wd = canvas.clientWidth
const ht = canvas.clientHeight
const pad = 20
const bottomPad = 50
const step = 80

// 绘制坐标系
cUtil.drawAxis({ wd, ht, pad, bottomPad, step })
cUtil.drawRectForFill({ x: 50, y: 50, w: 50, h: 50 })
cUtil.drawRectForStroke()
cUtil.drawfillRect()
cUtil.drawStrokeRect()




