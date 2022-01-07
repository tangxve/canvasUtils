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
cUtil.drawStrokeCircle({
  lineWidth: 1,
  color: 'red',
  x: 100, y: 100,
  radius: 50,
  startAngle: 0,
  endAngle: Math.PI * 2
})

cUtil.drawStrokeCircle({
  lineWidth: 1,
  color: 'red',
  x: 200, y: 100,
  radius: 50,
  startAngle: 0,
  endAngle: Math.PI
})

// 绘制圆形
cUtil.drawFillCircle({
  lineWidth: 1,
  color: cUtil.color16(),
  x: 300, y: 100,
  radius: 50, startAngle: 0,
  endAngle: Math.PI * 2
})


// 绘制扇形
cUtil.drawFillCircle({
  lineWidth: 1,
  color: cUtil.color16(),
  x: 500, y: 100,
  radius: 60,
  startAngle: 0,
  endAngle: Math.PI * 0.5
})

cUtil.drawFillCircle({
  lineWidth: 1,
  color: cUtil.color16(),
  x: 500, y: 100,
  radius: 80,
  startAngle: Math.PI * 0.5,
  endAngle: Math.PI * 1
})

cUtil.drawFillCircle({
  lineWidth: 1,
  color: cUtil.color16(),
  x: 500, y: 100,
  radius: 90,
  startAngle: Math.PI * 1,
  endAngle: Math.PI * 1.5
})



