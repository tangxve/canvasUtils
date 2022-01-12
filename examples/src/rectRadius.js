const canvas = document.getElementById('myCanvas')

const cUtil = canvasUtils.createInstance({ canvas })
const { ctx } = cUtil


cUtil.drawRectRadius({
  x: 0,
  y: 0,
  width: 250,
  height: 300,
  radius: 20,
  mode: 'img'
})

cUtil.drawRectRadius({
  x: 300,
  y: 0,
  width: 250,
  height: 300,
  radius: 20,
  mode: 'img'
})
