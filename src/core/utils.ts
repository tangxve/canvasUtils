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
