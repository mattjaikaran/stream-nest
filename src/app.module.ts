import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { UserModule } from './user/user.module';
import { OrganizationModule } from './organization/organization.module';
import { ConfigModule } from '@nestjs/config';
import config from 'mikro-orm.config';
import { Organization } from './entities/organization.entity';
import { User } from './entities/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot(), // Load .env file
    MikroOrmModule.forRoot(config),
    MikroOrmModule.forFeature([User, Organization]),
    UserModule,
    OrganizationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
