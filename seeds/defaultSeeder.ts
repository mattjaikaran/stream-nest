import { MikroORM } from '@mikro-orm/core';
import config from 'mikro-orm.config';
import { User } from 'src/entities/user.entity';

async function seed() {
  const orm = await MikroORM.init(config);
  const userRepository = orm.em.getRepository(User);

  const users = [
    { firstName: 'Rich', lastName: 'Eisen', email: 'rich@richeisenshow.com' },
    { firstName: 'Pat', lastName: 'McAfee', email: 'pat@patmcafeeshow.com' },
    // Add more users as needed
  ];

  for (const user of users) {
    const newUser = userRepository.create(user);
    await userRepository.persistAndFlush(newUser);
  }

  await orm.close(true);
}

seed().catch(err => console.error(err));
