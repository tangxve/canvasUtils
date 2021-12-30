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
