import {
  CanvasBase,
  CircleOption,
  DrawAxisFn,
  DrawAxisOpt,
  DrawTextOption,
  FontStyle,
  InitConfig,
  InitOption, RectRadiusOption
} from '../types'
import { transformFontStyle, getDPR } from './utils'

// 绘制画布

export function initCanvasContext(options: InitOption): CanvasRenderingContext2D {
  const { canvas, ratio } = options
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
export function drawLine(this: any, options: CanvasBase): void {
  let { ctx = this.ctx, lineWidth = 1, color, moveTo, lineTo } = options

  // 开始
  ctx.beginPath()
  ctx.lineWidth = lineWidth!
  ctx.strokeStyle = color!
  // 起点 中间点 重点
  ctx.moveTo.apply(ctx, moveTo!)
  ctx.lineTo.apply(ctx, lineTo!)
  // stroke() 方法会实际地绘制出通过 moveTo() 和 lineTo() 方法定义的路径。默认颜色是黑色。
  ctx.stroke()
  // 结束
  ctx.closePath()
}

// 绘制坐标系
export function drawAxis(this: any, options: DrawAxisOpt) {
  const { pad, wd, bottomPad, ht, step } = options
  let ctx = this.ctx || options.ctx
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
export function drawStrokeCircle(this: any, options: CircleOption) {
  const {
    lineWidth, color, x, y,
    radius, startAngle, endAngle
  } = options
  let ctx = this.ctx || options.ctx

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
export function drawFillCircle(this: any, options: any) {
  const {
    lineWidth, color, x, y,
    radius, startAngle, endAngle
  } = options

  let ctx = this.ctx || options.ctx
  ctx.beginPath()
  ctx.fillStyle = color
  ctx.moveTo(x, y)
  ctx.arc(x, y, radius, startAngle, endAngle)
  ctx.fill()
  ctx.closePath()
}


export function setShadow(
  this: any,
  offsetX: number,
  offsetY: number,
  blur: number,
  color: string,
  ctx: CanvasRenderingContext2D
): void {
  ctx = this.ctx || ctx
  ctx.shadowOffsetX = offsetX
  ctx.shadowOffsetY = offsetY
  ctx.shadowBlur = blur
  ctx.shadowColor = color
}


// 绘制文字
export function drawText(this: any, options: DrawTextOption) {

  let { text, x, y, maxWidth, color, font, textAlign, textBaseline, ...fontStyle } = options

  font = transformFontStyle({ font, ...fontStyle })

  let ctx = this.ctx || options.ctx

  ctx.fillStyle = color
  ctx.textAlign = textAlign
  ctx.textBaseline = textBaseline
  // font 的属性 https://developer.mozilla.org/zh-CN/docs/Web/CSS/font
  ctx.font = font
  ctx.fillText(text, x, y)
}

// 绘制多行文字
// 参考大佬的 https://www.zhangxinxu.com/wordpress/2018/02/canvas-text-break-line-letter-spacing-vertical/
export function drawWrapText(this: any, options: DrawTextOption) {
  let { text, x, y, maxWidth, lineHeight, font } = options
  let ctx = this.ctx

  if (maxWidth === undefined) {
    maxWidth = ctx?.width || 300
  }

  // 获取计算后的行高
  if (lineHeight === undefined) {
    lineHeight = this.lineHeight
  }
  else {
    lineHeight = parseInt(lineHeight as string, 10)
  }

  const arrText = text.split('')
  let line = ''

  for (let n = 0; n < arrText.length; n++) {
    let testLine = line + arrText[n]
    const measure = ctx.measureText(testLine)
    const testWidth = measure.width

    if (testWidth > maxWidth! && n > 0) {
      ctx.fillText(line, x, y)
      line = arrText[n]
      y! += (lineHeight as number)
    }
    else {
      line = testLine
    }
  }

  ctx.fillText(line, x, y)
}

// 绘制圆角矩形
export function drawRectRadius(this: any, options: RectRadiusOption) {
  let ctx = this.ctx || options.ctx

  const { x, y, width, height, lineWidth, mode } = options

  ctx.lineWidth = lineWidth || 1

  roundRect.call(this, options)
  if (mode === 'contain') {
    ctx.strokeStyle = 'red'
    ctx.stroke()
  }

  if (mode === 'fill') {
    ctx.fillStyle = 'red'
    ctx.fill()
  }
}

function roundRect(this: any, options: RectRadiusOption) {
  const { x, y, width, height, radius, lineWidth, mode } = options
  let ctx = this.ctx || options.ctx

  const top = {
    s: [x + radius, y],
    e: [x + width - radius, y]
  }
  const right = {
    s: [x + width, y + radius],
    e: [x + width, y + height - radius]
  }
  const bottom = {
    s: [x + width - radius, y + height],
    e: [x + radius, y + height]
  }
  const left = {
    s: [x, y + height - radius],
    e: [x, y + radius]
  }

  const arcToTopRight = [right.s[0], top.s[1], ...right.s, radius]
  const arcToBottomRight = [right.s[0], bottom.s[1], ...bottom.s, radius]
  const arcToBottomLeft = [left.s[0], bottom.s[1], ...left.s, radius]
  const arcToTopLeft = [left.s[0], top.s[1], ...top.s, radius]

  ctx.beginPath()
  ctx.moveTo(...top.s)
  ctx.lineTo(...top.e)
  ctx.arcTo(...arcToTopRight)

  ctx.lineTo(...right.s)
  ctx.lineTo(...right.e)
  ctx.arcTo(...arcToBottomRight)

  ctx.lineTo(...bottom.s)
  ctx.lineTo(...bottom.e)
  ctx.arcTo(...arcToBottomLeft)

  ctx.lineTo(...left.s)
  ctx.lineTo(...left.e)
  ctx.arcTo(...arcToTopLeft)
  ctx.closePath()

  return this
}


