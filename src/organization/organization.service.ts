import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/core';
import { Organization } from 'src/entities/organization.entity';
import { User } from 'src/entities/user.entity';

@Injectable()
export class OrganizationService {
  constructor(
    @InjectRepository(Organization)
    private readonly organizationRepository: EntityRepository<Organization>,
    @InjectRepository(User)
    private readonly userRepository: EntityRepository<User>,
  ) {}

  async createOrganization(organization: Partial<Organization>): Promise<Organization> {
    const owner = await this.userRepository.findOne(organization.owner.id);
    if (!owner) {
      throw new Error('Owner not found');
    }
    const newOrganization = this.organizationRepository.create({ ...organization, owner });
    await this.organizationRepository.persistAndFlush(newOrganization);
    return newOrganization;
  }

  async findAll(): Promise<Organization[]> {
    return this.organizationRepository.findAll();
  }

  async findOne(id: string): Promise<Organization> {
    return this.organizationRepository.findOne(id);
  }

  async updateOrganization(id: string, organization: Partial<Organization>): Promise<Organization> {
    const existingOrganization = await this.organizationRepository.findOne(id);
    if (existingOrganization) {
      if (organization.owner) {
        const owner = await this.userRepository.findOne(organization.owner.id);
        if (!owner) {
          throw new Error('Owner not found');
        }
        organization.owner = owner;
      }
      this.organizationRepository.assign(existingOrganization, organization);
      await this.organizationRepository.persistAndFlush(existingOrganization);
      return existingOrganization;
    }
    return null;
  }

  async deleteOrganization(id: string): Promise<void> {
    const organization = await this.organizationRepository.findOne(id);
    if (organization) {
      await this.organizationRepository.removeAndFlush(organization);
    }
  }
}
