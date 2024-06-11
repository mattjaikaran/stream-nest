import { Entity, PrimaryKey, Property, Collection, OneToOne, OneToMany } from '@mikro-orm/core';
import { v4 } from 'uuid';
import { User } from './user.entity';

@Entity()
export class Organization {
  @PrimaryKey()
  id: string = v4();

  @Property()
  name: string;

  @OneToOne()
  owner: User;

  @OneToMany(() => User, user => user.id)
  employees = new Collection<User>(this);

  @Property()
  type: string;

  @Property()
  verified: boolean = false;
}
