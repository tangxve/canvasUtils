export interface CanvasBase {
  ctx: CanvasRenderingContext2D,
  width?: string,
  height?: string,
}


export interface InitOption {
  canvas: HTMLCanvasElement,
  width?: string,
  height?: string,
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
