import { Entity, PrimaryKey, Property, ManyToMany, Collection } from '@mikro-orm/core';
import { v4 } from 'uuid';
import { Organization } from './organization.entity';

@Entity()
export class User {
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = `${firstName} ${lastName}`
  }

  @PrimaryKey()
  id: string = v4();

  @Property()
  firstName: string;

  @Property()
  lastName: string;

  @Property()
  fullName: string;

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

  @ManyToMany(() => Organization, organization => organization.employeeAdmins)
  organizations = new Collection<Organization>(this);
}
