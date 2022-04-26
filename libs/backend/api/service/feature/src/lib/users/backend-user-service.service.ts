import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getAllUsers(): string[] {
    return ['User1', 'User2'];
  }
}
