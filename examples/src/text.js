const canvas = document.getElementById('myCanvas')

canvas.style
const cUtil = canvasUtils.createInstance({ canvas })
const { ctx } = cUtil


cUtil.drawLine({
  ctx, color: '#ccc',
  moveTo: [400, 0],
  lineTo: [400, 500]
})
cUtil.drawLine({
  ctx, color: '#ccc',
  moveTo: [0, 250],
  lineTo: [800, 250]
})


cUtil.drawText('绘制文案', 10, 20, '40px', 'red')

console.log('ctx.font ===> ', ctx.font.split(' '))

