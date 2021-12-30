import { CanvasBase, InitOption } from '../types'

// 获取设备 dpr
export const getDPR = (): number => {
  return window.devicePixelRatio || 1
}

// 绘制画布
export const initCanvasContext = ({ canvas }: InitOption): CanvasRenderingContext2D => {
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

  const dpr = getDPR()
  const oldWidth = canvas.width
  const oldHeight = canvas.height

  canvas.width = oldWidth * dpr
  canvas.height = oldHeight * dpr

  canvas.style.width = `${oldWidth}px`
  canvas.style.height = `${oldHeight}px`

  // 画布内容缩放 (x,y)
  ctx.scale(dpr, dpr)

  return ctx
}
// 绘制直线
export const drawLine = ({ ctx }: CanvasBase): void => {
  // 开始
  ctx.beginPath()
  ctx.lineWidth = 5
  ctx.strokeStyle = 'red'

  // 起点 中间点 重点
  ctx.moveTo(100, 100)
  ctx.lineTo(200, 200)
  ctx.lineTo(300, 100)
  // stroke() 方法会实际地绘制出通过 moveTo() 和 lineTo() 方法定义的路径。默认颜色是黑色。
  ctx.stroke()

  // 结束
  ctx.closePath()
}

//
