import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/core';
import { User } from '../entities/user.entity';
import { EntityManager } from '@mikro-orm/postgresql';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: EntityRepository<User>,
    private readonly em: EntityManager
  ) {}

  async createUser(user: Partial<User>): Promise<User> {
    const newUser = this.userRepository.create(user);
    await this.em.persistAndFlush(newUser);
    return newUser;
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  async findOne(id: string): Promise<User> {
    return this.userRepository.findOne(id);
  }

  async updateUser(id: string, user: Partial<User>): Promise<User> {
    const existingUser = await this.userRepository.findOne(id);
    if (existingUser) {
      this.userRepository.assign(existingUser, user);
      await this.em.persistAndFlush(existingUser);
      return existingUser;
    }
    return null;
  }

  async deleteUser(id: string): Promise<void> {
    const user = await this.userRepository.findOne(id);
    if (user) {
      await this.em.removeAndFlush(user);
    }
  }
}
