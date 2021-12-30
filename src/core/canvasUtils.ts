import { CanvasBase } from '../types'

// 绘制直线
export const drawDath = ({ canvas }: CanvasBase): void => {
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D

  ctx.beginPath()
  ctx.moveTo(200, 100)
  ctx.lineTo(700, 600)
  ctx.closePath()
}
