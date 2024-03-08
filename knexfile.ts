import { env } from './src/env'

const config = {
  client: env.DATABASE_CLIENT,
  connection:
    env.DATABASE_CLIENT === 'sqlite3'
      ? {
          filename: env.DATABASE_URL,
        }
      : env.DATABASE_URL,
  migrations: {
    directory: './database/migrations',
  },
  useNullAsDefault: true,
}

export default config
