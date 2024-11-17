const dbConfig = {
    dialect: 'postgresql',
    schema: './utils/db/schema.ts',
    out: './drizzle',
    dbCredentials: {
      url: process.env.DATABASE_URL,  
      connectionString: process.env.DATABASE_URL,
    }
  };
  
  export default dbConfig;
  