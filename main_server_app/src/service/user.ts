import { provide, plugin, inject } from 'midway';
import { IUserService, IUserOptions, IUserResult } from '../interface';
import UserDao from '../dao/user';

@provide('userService')
export class UserService implements IUserService {
  // @inject()
  // ctx: Context;

  // @plugin()
  // mysql;

  @inject()
  userDao: UserDao;

  async getUser(options: IUserOptions): Promise<IUserResult> {

    const result = await this.userDao.login();
    console.log('++++++++', result);
    return result;
  }
}
