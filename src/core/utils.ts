import { FontStyle } from '../types'

/**
 * font 参数格式
 * [font-style] [font-variant] [font-weight]（可选的）
 * [font-size/line-height] [font-family]（必须的）
 * https://developer.mozilla.org/zh-CN/docs/Web/CSS/font
 */

export function transformFontStyle(options: FontStyle): string {
  const { font, fontStyle, fontVariant, fontWeight, fontSize, lineHeight, fontFamily } = options

  if (font) return font


  return `${fontStyle} ${fontVariant} ${fontWeight} ${fontSize}/${lineHeight} ${fontFamily}`
}

// 获取设备 dpr
export const getDPR = function(): number {
  return window.devicePixelRatio || 1
}

// 获取 16进制颜色
export function color16(): string {
  // 随机 * 最大的16进制数(0xFFFFFF) 然后在转成16进制
  return `#${parseInt(String(Math.random() * 0xFFFFFF), 10).toString(16)}`
}
