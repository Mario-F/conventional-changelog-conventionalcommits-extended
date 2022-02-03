'use strict'

import { PresetConfig } from './types'
import debug from 'debug'

const d = debug('conventional-changelog-conventionalcommits-extended:index')

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export = function (parameter: any): any {
  d(parameter)

  if (typeof parameter === 'function') {
    throw new Error('not implemented')
  } else {
    const config: PresetConfig = parameter || {}
    return presetOpts(config)
  }
}

function presetOpts(config: PresetConfig) {
  const result = {
    conventionalChangelog: null,
    parserOpts: null,
    recommendedBumpOpts: null,
    writerOpts: null,
  }

  d(result)
  return result
}
