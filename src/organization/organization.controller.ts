import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { Organization } from '../entities/organization.entity';

@Controller('organizations')
export class OrganizationController {
  constructor(private readonly organizationService: OrganizationService) {}

  @Post()
  create(@Body() organization: Partial<Organization>): Promise<Organization> {
    return this.organizationService.createOrganization(organization);
  }

  @Get()
  findAll(): Promise<Organization[]> {
    return this.organizationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Organization> {
    return this.organizationService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() organization: Partial<Organization>): Promise<Organization> {
    return this.organizationService.updateOrganization(id, organization);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.organizationService.deleteOrganization(id);
  }
}
