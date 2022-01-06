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
// 绘制柱状图
ctx.beginPath()
for (let i = 1; i < Math.floor(wd / step); i++) {
  // 随机高度 区间 300 - 50
  const hegiht = Math.random() * 300 + 50
  const opt = {
    x: i * step,
    y: ht - bottomPad - hegiht - 1,
    w: 40,
    h: hegiht,
    fillStyle: cUtil.color16()
  }
  cUtil.drawfillRect(opt)
}
ctx.closePath()


// cUtil.drawRectForFill({ x: 50, y: 50, w: 50, h: 50 })
// cUtil.drawRectForStroke()
// cUtil.drawfillRect()
// cUtil.drawStrokeRect()




