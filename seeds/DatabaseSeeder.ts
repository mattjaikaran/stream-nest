import { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { Organization } from 'src/entities/organization.entity';
import { User } from 'src/entities/user.entity';

export class DatabaseSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    // Create users
    const users = [
      em.create(User, { firstName: 'Rich', lastName: 'Eisen', email: 'rich@richeisenshow.com' }),
      em.create(User, { firstName: 'Pat', lastName: 'McAfee', email: 'pat@patmcafeeshow.com' }),
      // Add more users as needed
    ];

    // Create organizations
    const organizations = [
      em.create(Organization, { name: 'Rich Eisen Show', owner: users[0], type: 'Sports' }),
      em.create(Organization, { name: 'Pat McAfee Show', owner: users[1], type: 'Sports' }),
      // Add more organizations as needed
    ];

    // Persist and flush entities
    await em.persistAndFlush([...users, ...organizations]);
  }
}