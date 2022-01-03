import { CanvasBase, DrawAxisFn, DrawAxisOpt, InitOption } from '../types'

// 获取设备 dpr
export const getDPR = (): number => {
  return window.devicePixelRatio || 1
}

// 绘制画布
export const initCanvasContext = (option: InitOption): CanvasRenderingContext2D => {
  const { canvas, ratio } = option
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

  // 高清绘制
  const dpr = ratio || getDPR()
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

// 绘制坐标系
export const drawAxis = (options: DrawAxisOpt) => {
  const { ctx, pad, wd, bottomPad, ht, step } = options
  // 绘制坐标系
  ctx.beginPath()
  ctx.lineWidth = 2
  ctx.strokeStyle = 'red'

  ctx.moveTo(pad, pad)
  ctx.lineTo(pad, ht - bottomPad)
  ctx.lineTo(wd - pad, ht - bottomPad)

  ctx.stroke()
  ctx.closePath()


  // 绘制 X 轴方向刻度
  ctx.beginPath()
  ctx.lineWidth = 1
  ctx.strokeStyle = '#666'
  for (let i = 1; i < Math.floor(wd / step); i++) {
    ctx.moveTo(pad + i * step, ht - bottomPad)
    ctx.lineTo(pad + i * step, ht - bottomPad - 10)
  }
  ctx.stroke()
  ctx.closePath()


  // 绘制 Y 轴方向刻度
  ctx.beginPath()
  ctx.lineWidth = 1
  ctx.strokeStyle = '#666'
  for (let i = 1; i < Math.floor(ht / step); i++) {
    ctx.moveTo(pad, (ht - bottomPad) - i * step)
    ctx.lineTo(pad + 10, (ht - bottomPad) - i * step)
  }
  ctx.stroke()
  ctx.closePath()
}

// 绘制矩形 - 填充 (rect + fill)
export const drawRectForFill = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number
) => {
  ctx.beginPath()
  ctx.fillStyle = '#ccc'
  ctx.rect(x, y, w, h)
  ctx.fill()
  ctx.closePath()
}
// export const drawRectForFill = (options: CanvasBase) => {
//   const { ctx, x, y, w, h } = options
//   ctx.beginPath()
//   ctx.fillStyle = '#ccc'
//   ctx.rect(x, y, w, h)
//   ctx.fill()
//   ctx.closePath()
// }


// 绘制矩形 - 边框 (rect + stroke)
export const drawRectForStroke = (options: CanvasBase) => {
  const { ctx } = options
  ctx.beginPath()
  ctx.strokeStyle = '#666'
  ctx.rect(150, 50, 50, 50)
  ctx.stroke()
  ctx.closePath()
}

// 绘制矩形 - 填充的 fillRect()
export const drawfillRect = (options: CanvasBase) => {
  const { ctx } = options
  ctx.beginPath()
  ctx.fillStyle = 'skyblue'
  ctx.fillRect(250, 50, 50, 50)
  ctx.closePath()
}

// 绘制矩形 - 边框 strokeRect()
export const drawStrokeRect = (options: CanvasBase) => {
  const { ctx } = options
  ctx.beginPath()
  ctx.lineWidth = 4
  ctx.strokeStyle = 'seagreen'
  ctx.strokeRect(350, 50, 50, 50)
  ctx.closePath()
}




