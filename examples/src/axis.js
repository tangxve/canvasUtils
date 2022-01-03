const canvas = document.getElementById('myCanvas')

const ctx = canvasUtils.initCanvasContext({ canvas })

// 提前设置属性
const wd = canvas.clientWidth
const ht = canvas.clientHeight
const pad = 20
const bottomPad = 50
const step = 80

canvasUtils.drawAxis({ wd, ht, pad, bottomPad, step, ctx })
