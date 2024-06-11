import { MikroORM } from '@mikro-orm/core';
import config from 'mikro-orm.config';
import { Organization } from 'src/entities/organization.entity';
import { User } from 'src/entities/user.entity';

async function seed() {
  const orm = await MikroORM.init(config);
  const userRepository = orm.em.getRepository(User);
  const organizationRepository = orm.em.getRepository(Organization);

  const users = [
    { firstName: 'Rich', lastName: 'Eisen', email: 'rich@richeisenshow.com' },
    { firstName: 'Pat', lastName: 'McAfee', email: 'pat@patmcafeeshow.com' },
    // Add more users as needed
  ];

  for (const user of users) {
    const newUser = userRepository.create(user);
    await userRepository.persistAndFlush(newUser);
  }

  const organizations = [
    { name: 'Rich Eisen Show', owner: await userRepository.findOne({ email: 'rich@richeisenshow.com' }), type: 'Show' },
    { name: 'Pat McAfee Show', owner: await userRepository.findOne({ email: 'pat@patmcafeeshow.com' }), type: 'Show' },
    // Add more organizations as needed
  ];

  for (const organization of organizations) {
    const newOrganization = organizationRepository.create(organization);
    await organizationRepository.persistAndFlush(newOrganization);
  }

  await orm.close(true);
}

seed().catch(err => console.error(err));
