const canvas = document.getElementById('myCanvas')

const cUtil = canvasUtils.createInstance({ canvas })
const { ctx } = cUtil


cUtil.drawRectRadius({
  x: 100,
  y: 100,
  width: 250,
  height: 300,
  radius: 20
})
