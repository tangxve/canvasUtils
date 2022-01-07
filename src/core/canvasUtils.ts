import { CanvasBase, CircleOption, DrawAxisFn, DrawAxisOpt, InitConfig, InitOption } from '../types'

// 获取设备 dpr
export const getDPR = function(): number {
  return window.devicePixelRatio || 1
}

// 获取 16进制颜色
export function color16(): string {
  // 随机 * 最大的16进制数(0xFFFFFF) 然后在转成16进制
  return `#${parseInt(String(Math.random() * 0xFFFFFF), 10).toString(16)}`
}


// 绘制画布
export function initCanvasContext(option: InitOption): CanvasRenderingContext2D {
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
export function drawLine({ ctx }: CanvasBase): void {
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
export function drawAxis(options: DrawAxisOpt) {
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
    ctx.moveTo(pad + i * step, ht - bottomPad + 1)
    ctx.lineTo(pad + i * step, ht - bottomPad + 10)
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


export function drawRectForFill(options: CanvasBase) {
  const { ctx, x, y, w, h } = options
  ctx.beginPath()
  ctx.fillStyle = '#ccc'
  ctx.rect(x!, y!, w!, h!)
  ctx.fill()
  ctx.closePath()
}


// 绘制矩形 - 边框 (rect + stroke)
export function drawRectForStroke(options: CanvasBase) {
  const { ctx } = options
  ctx.beginPath()
  ctx.strokeStyle = '#666'
  ctx.rect(150, 50, 50, 50)
  ctx.stroke()
  ctx.closePath()
}

// 绘制矩形 - 填充的 fillRect()
export function drawfillRect(options: CanvasBase) {
  const { ctx, x, y, w, h, fillStyle } = options
  ctx.fillStyle = fillStyle
  ctx.fillRect(x!, y!, w!, h!)
}

// 绘制矩形 - 边框 strokeRect()
export function drawStrokeRect(options: CanvasBase) {
  const { ctx } = options
  ctx.beginPath()
  ctx.lineWidth = 4
  ctx.strokeStyle = 'seagreen'
  ctx.strokeRect(350, 50, 50, 50)
  ctx.closePath()
}

// 绘制圆环
export function drawStrokeCircle(options: CircleOption) {
  console.log('drawStrokeCircle', options)
  const {
    ctx, lineWidth, color, x, y,
    radius, startAngle, endAngle
  } = options

  ctx.beginPath()
  ctx.lineWidth = lineWidth!
  ctx.strokeStyle = color!
  /**
   * x: 圆弧中心（圆心）的 x 轴坐标。
   * y: 圆弧中心（圆心）的 y 轴坐标。
   * radius: 圆弧的半径。
   * startAngle: 绘制起始的角度， x轴方向开始计算，单位以弧度表示。
   * endAngle: ， 绘制到的角度，不是绘制多少角度
   * anticlockwise: 可选的Boolean值 ，如果为 true，逆时针绘制圆弧，反之，顺时针绘制。
   */
  // 如果绘制线，会从 绘制起始的角度开始
  // ctx.moveTo(x!, y!)
  // ctx.lineTo(100, 100)
  ctx.arc(x!, y!, radius, startAngle, endAngle)
  ctx.stroke()
  ctx.closePath()
}

// 绘制实心圆
export function drawFillCircle(options: any) {
  const {
    ctx, lineWidth, color, x, y,
    radius, startAngle, endAngle
  } = options

  ctx.beginPath()
  ctx.fillStyle = color
  ctx.moveTo(x, y)
  ctx.arc(x, y, radius, startAngle, endAngle)
  ctx.fill()
  ctx.closePath()
}




