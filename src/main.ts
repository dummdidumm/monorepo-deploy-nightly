import * as core from '@actions/core'
import {RunSettings, runDeployer} from './runner'

async function run(): Promise<void> {
  try {
    const since = core.getInput('since') || '1 day ago'
    const cwd = core.getInput('cwd') || '.'
    const sort = JSON.parse(core.getInput('sort')) || []
    const install = !!core.getInput('install') || false

    const settings: RunSettings = {
      since,
      cwd,
      sort,
      install
    }

    await runDeployer(settings)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
