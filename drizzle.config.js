/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.jsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: process.env.NEXT_PUBLIC_DATABASE_URL || 'postgresql://Expense-tracker_owner:xZHKVm7CDG5c@ep-snowy-sunset-a5zki2ud.us-east-2.aws.neon.tech/Expense-tracker?sslmode=require',
    }
  } ;