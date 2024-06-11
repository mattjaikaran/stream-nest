import { MikroORM } from '@mikro-orm/core';
import config from 'mikro-orm.config';
import { Organization } from 'src/entities/organization.entity';
import { User } from 'src/entities/user.entity';

async function seed() {
  const orm = await MikroORM.init(config);
  const em = orm.em.fork();
  
  const users = [
    { firstName: 'Rich', lastName: 'Eisen', email: 'rich@richeisenshow.com' },
    { firstName: 'Pat', lastName: 'McAfee', email: 'pat@patmcafeeshow.com' },
    // Add more users as needed
  ];

  for (const user of users) {
    const newUser = em.create(User, user);
    await em.persistAndFlush(newUser);
  }

  const organizations = [
    { name: 'Rich Eisen Show', owner: await em.findOne(User, { email: 'rich@richeisenshow.com' }), type: 'Sports' },
    { name: 'Pat McAfee Show', owner: await em.findOne(User, { email: 'pat@patmcafeeshow.com' }), type: 'Sports' },
    // Add more organizations as needed
  ];

  for (const organization of organizations) {
    const newOrganization = em.create(Organization, organization);
    await em.persistAndFlush(newOrganization);
  }

  await orm.close(true);
}

seed().catch(err => console.error(err));
