//postgresql://Root_owner:W0XpMFCx4Ktq@ep-cool-sunset-a4a3iqf9.us-east-1.aws.neon.tech/zero2hero?sslmode=require
import {neon} from 'neondatabase/serverless'
import {drizzle} from 'drizzle-orm/neon-http'
import * as schema from './schema'
const sql = neon(process.env.DATABASE_URL)
export const db = drizzle(sql,{schema})