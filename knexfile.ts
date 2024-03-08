import { Knex } from 'knex'
import path from 'path'
import { env } from './src/env'

const config: Knex.Config = {
  client: env.DATABASE_CLIENT,
  connection:
    env.DATABASE_CLIENT === 'sqlite3'
      ? {
          filename: path.resolve(__dirname, 'database', env.DATABASE_URL),
        }
      : env.DATABASE_URL,
  migrations: {
    extension: 'ts',
    directory: path.resolve(__dirname, 'database', 'migrations'),
  },
  useNullAsDefault: true,
}

export default config
