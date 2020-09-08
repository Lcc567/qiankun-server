import { Context, inject, controller, get, provide, post } from 'midway';
import { isNull } from 'util';
import { IUserService, IUserResult } from '../../interface';

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
