import { finished } from 'stream'

export interface InitConfig {
  ctx?: CanvasRenderingContext2D,
  width?: string,
  height?: string,
}

type  MoveTo = [x: number, y: number]

export interface CanvasBase {
  ctx: CanvasRenderingContext2D,
  width?: string,
  height?: string,
  x?: number | null,
  y?: number | null,
  w?: number | null,
  h?: number | null,
  moveTo?: MoveTo,
  lineTo?: MoveTo,

  lineWidth?: number | null,
  color?: string

  [propName: string]: any
}


export interface InitOption {
  canvas: HTMLCanvasElement,
  width?: string,
  height?: string,
  ratio?: number
}

export interface DrawAxisOpt {
  ctx: CanvasRenderingContext2D,
  ht: number
  wd: number
  pad: number
  bottomPad: number
  step: number

  [propName: string]: any
}

export interface DrawAxisFn {
  (options: DrawAxisOpt): void
}

export interface CircleOption extends CanvasBase {
  radius: number,
  startAngle: number,
  endAngle: number
}

export interface FontStyle {
  fontSize: string;
  fontFamily: string;
  font?: string;
  fontFeatureSettings?: string;
  fontKerning?: string;
  fontOpticalSizing?: string;
  fontSizeAdjust?: string;
  fontStretch?: string;
  fontStyle?: string;
  fontSynthesis?: string;
  fontVariant?: string;
  fontWeight?: string;
  lineHeight?: string;
  // /** @deprecated */
  // fontVariantAlternates: string;
  // fontVariantCaps: string;
  // fontVariantEastAsian: string;
  // fontVariantLigatures: string;
  // fontVariantNumeric: string;
  // fontVariantPosition: string;
  // fontVariationSettings: string;
}
