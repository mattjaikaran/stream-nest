import { Module } from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { OrganizationController } from './organization.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Organization } from 'src/entities/organization.entity';
import { User } from 'src/entities/user.entity';

@Module({
  imports: [MikroOrmModule.forFeature([Organization, User])],
  providers: [OrganizationService],
  controllers: [OrganizationController],
})
export class OrganizationModule {}
