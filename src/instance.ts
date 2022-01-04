import * as utils from './core/canvasUtils'
import { InitConfig, InitOption } from './types'

export class CanvasUtils {
  ctx: CanvasRenderingContext2D | undefined

  constructor(initConfig: InitOption) {
    this.ctx = utils.initCanvasContext(initConfig)
    // @ts-ignore
    // return this.ctx
  }
}

Object.keys(utils).forEach((k) => {
  CanvasUtils.prototype[k] = function(options: any) {
    const _options: any = { ctx: this.ctx, ...options }
    utils[k](_options)
  }
})

function createInstance(config: InitOption): any {
  const context = new CanvasUtils(config)

  return context
}

export default createInstance
