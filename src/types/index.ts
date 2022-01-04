export interface CanvasBase {
  ctx: CanvasRenderingContext2D,
  width?: string,
  height?: string,
  x?: number | null,
  y?: number | null,
  w?: number | null,
  h?: number | null

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
