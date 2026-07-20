import { drizzle } from 'drizzle-orm/bun-sqlite';
import { Database } from 'bun:sqlite';
import * as schema from './schema';
import 'dotenv/config';

const dbPath = process.env.DB_PATH || 'sqlite.db';
const sqlite = new Database(dbPath);

export const db = drizzle(sqlite, { schema });
