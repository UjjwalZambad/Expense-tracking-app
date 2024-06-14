import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';
const sql = neon(process.env.NEXT_PUBLIC_DATABASE_URL || 'postgresql://Expense-tracker_owner:xZHKVm7CDG5c@ep-snowy-sunset-a5zki2ud.us-east-2.aws.neon.tech/Expense-tracker?sslmode=require');
export const db = drizzle(sql, {schema});