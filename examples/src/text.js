const canvas = document.getElementById('myCanvas')

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


cUtil.drawText({ text: '绘制文案', x: 10, y: 40, font: '40px system-ui', color: 'red' })
cUtil.drawText({ text: '绘制文案', x: 400, y: 250, font: '40px system-ui', color: 'red' })


ctx.font = '20px system-ui'
ctx.textBaseline = 'top'

cUtil.drawWrapText({
  text: '测试换行测试换行测试换行测试换行,测试换行测试换行',
  x: 100, y: 200,
  maxWidth: 200,
  lineHeight: 30
})

cUtil.drawLine({
  ctx,
  color: '#999',
  moveTo: [100, 200],
  lineTo: [300, 200]
})

console.log('ctx.font ===> ', ctx.font.split(' '))

