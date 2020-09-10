import { Context, inject, controller, get, provide, post } from 'midway';
import { IUserService, IUserResult } from '../../interface';
const JWT = require('jsonwebtoken');

@provide()
@controller('/')
export class HomeController {

  @inject()
  ctx: Context;

  @inject('userService')
  service: IUserService;

  @get('/')
  async index() {
    this.ctx.body = `Welcome to midwayjs!`;
  }

  @get('/verify')
  async verify() {
    const token = this.ctx.request.header.authorization;
    try {
      const secret = this.ctx.app.config.auth.secret;
      const result = await this.ctx.helper.verifyToken(token, secret);
      const newToken = await this.ctx.helper.updateToken(result.data, secret);
      this.ctx.successReturn(newToken);
    } catch (error) {
      this.ctx.body = {
        code: 401,
        msg: 'token无效'
      };
    }
  }

  @post('/login')
  async login(): Promise<void> {
    const params = this.ctx.request.body;
    const result = await this.service.login(params);
    if (result.length > 0) {
      this.ctx.successReturn(result[0]);
    } else {
      this.ctx.body = {
        code: 500,
        msg: '账号或密码错误'
      };
    }
  }
}
