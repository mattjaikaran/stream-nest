import { MikroOrmModuleOptions } from '@mikro-orm/nestjs';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { SeedManager } from '@mikro-orm/seeder';
import * as dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const config: MikroOrmModuleOptions = {
  entities: ['./dist/entities'],
  entitiesTs: ['./src/entities'],
  dbName: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  autoLoadEntities: true,
  debug: true,
  driver: PostgreSqlDriver,
  extensions: [SeedManager], // Register the SeedManager extension
  seeder: {
    path: './seeds', // Path to the folder with seeders
    defaultSeeder: 'DatabaseSeeder', // Default seeder class name
  },
};

export default config;
