// import { Seeder, Factory, Faker } from '@mikro-orm/seeder';
// import { Organization } from 'src/entities/organization.entity';
// import { User } from 'src/entities/user.entity';

// export class DatabaseSeeder extends Seeder {
//   async run(em: EntityManager, factory: Factory, faker: Faker): Promise<void> {
//     const users = factory(User)().createMany(10);
//     const organizations = factory(Organization)().createMany(5);
//     const channels = factory(Channel)().createMany(10);
//     const playlists = factory(Playlist)().createMany(20);
//     const videos = factory(Video)().createMany(50);

//     await em.persistAndFlush([...users, ...organizations, ...channels, ...playlists, ...videos]);
//   }
// }