import { CanvasUtils } from './core/canvasUtils'
import { InitConfig, InitOption } from './types'

function createInstance(config: InitOption): any {
  const context = new CanvasUtils(config)

  return context
}

export default createInstance
