import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { v4 } from 'uuid';

@Entity()
export class User {
  @PrimaryKey()
  id: string = v4();

  @Property()
  firstName: string;

  @Property()
  lastName: string;

  @Property({ unique: true })
  email: string;

  @Property({ nullable: true })
  location?: string;

  @Property({ nullable: true })
  zipCode?: string;

  @Property()
  dateCreated: Date = new Date();

  @Property()
  verified: boolean = false;

  @Property()
  ipAddress: string;
}
