import { provide, plugin, inject, Context } from 'midway';
import { IUserService, IUserOptions, IUserResult } from '../interface';
import UserDao from '../dao/user';
import { LoginForm } from "../interface/login";

@provide('userService')
export class UserService implements IUserService {

  @inject()
  ctx: Context

  @inject()
  userDao: UserDao;

  async login(options: LoginForm) {
    console.log('======', options, this.ctx);
    const result = await this.userDao.login(options);
    return result;
  }

  async getUser(options: IUserOptions): Promise<IUserResult> {
    return {
      id: options.id,
      username: 'mockedName',
      phone: '12345678901',
      email: 'xxx.xxx@xxx.com',
    };
  }
}
