import { MikroOrmModuleOptions } from '@mikro-orm/nestjs';

const config: MikroOrmModuleOptions = {
  entities: ['./dist/entities'],
  entitiesTs: ['./src/entities'],
  dbName: 'video_streaming',
  type: 'postgresql',
  user: 'your_db_user',
  password: 'your_db_password',
  debug: true,
};

export default config;
