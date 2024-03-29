import type { ILogObj, ISettingsParam } from 'tslog'
import { Logger as TsLogger } from 'tslog'

class Logger extends TsLogger<ILogObj> {
  constructor(settings?: ISettingsParam<ILogObj>) {
    super({
      ...settings,
      prettyErrorLoggerNameDelimiter: ' > ',
      hideLogPositionForProduction: true
    })
  }
}

export default new Logger();

