import { Entity, PrimaryKey, Property, ManyToOne, ManyToMany, Collection } from '@mikro-orm/core';
import { v4 } from 'uuid';
import { User } from './user.entity';

@Entity()
export class Organization {
  @PrimaryKey()
  id: string = v4();

  @Property()
  name: string;

  @ManyToOne()
  owner: User;

  @ManyToMany(() => User, 'organizations')
  employeeAdmins = new Collection<User>(this);

  @ManyToMany(() => User, 'organizations')
  employees = new Collection<User>(this);

  @Property()
  type: string;

  @Property()
  verified: boolean = false;
}
