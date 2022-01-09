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
  // CanvasUtils.prototype[k] = function() {
  //   // const _options: any = { ctx: this.ctx, ...options }
  //   // console.log('this', this)
  //   console.log('arguments', arguments)
  //   return utils[k].call(this, arguments)
  // }
  CanvasUtils.prototype[k] = utils[k]
})

function createInstance(config: InitOption): any {
  const context = new CanvasUtils(config)
  // console.log('context', context)
  return context
}

export default createInstance
