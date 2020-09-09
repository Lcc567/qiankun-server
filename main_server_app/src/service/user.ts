import { provide, plugin, inject, Context } from 'midway';
import { IUserService, IUserOptions, IUserResult } from '../interface';
import { LoginForm } from '../interface/login';

const JWT = require('jsonwebtoken');
@provide('userService')
export class UserService implements IUserService {
  @plugin()
  mysql;

  @inject()
  ctx: Context;

  async login(options: LoginForm) {
    const result = await this.mysql.select('user', {
      where: { username: options.username },
      columns: ['username', 'phone', 'email', 'age']
    });
    console.log('result', result);
    if (result && result.length === 1) {
      console.log('Math.floor(Date.now() / 1000) + (60 * 60)', Math.floor(Date.now() / 1000) + (60 * 60));
      const token = JWT.sign({
        exp: 60 * 60,
        data: result
      }, this.ctx.app.config.auth.secret);
      result[0].token = token;
      console.log('token', result);
    }
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
