import { Knex } from 'knex'
import path from 'path'
import { env } from './src/env'

const config: Knex.Config = {
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'tmp', env.DATABASE_URL),
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
  },
  useNullAsDefault: true,
}

export default config
