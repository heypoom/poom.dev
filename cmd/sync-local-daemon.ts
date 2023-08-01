/**
 * Periodically identify changes in the local vault,
 * then push those changes to MongoDB.
 */

import path from 'path'
import { homedir } from 'os'
import cron from 'node-cron'

import { scanLocalVault } from './local/scanLocalVault'

import { mongo, timed as t, syncNotesToDatabase } from '../src/prepare'

const CRONTAB = '* * * * *'
const VAULT_PATH = path.resolve(homedir(), 'notes')

async function sync() {
  console.log('> syncing...')

  const notes = await t('process', () => scanLocalVault(VAULT_PATH))

  await t('sync', () => syncNotesToDatabase(notes))
}

// Runs every 30 seconds.
cron.validate(CRONTAB)
cron.schedule(CRONTAB, sync)

// TODO: does not work on Windows.
process.on('SIGINT', function () {
  mongo.close()
  process.exit()
})
