import { Context, inject, controller, get, provide, post } from 'midway';
import { LoginForm } from "../../interface/login";
import { IUserService, IUserResult } from '../../interface';

@provide()
@controller('/')
export class HomeController {

  @inject()
  ctx: Context;

  @inject('userService')
  service: IUserService

  @get('/')
  async index() {
    this.ctx.body = `Welcome to midwayjs!`;
  }

  @post('/login')
  async login(options: LoginForm) {
    // console.log('======',options, this.ctx.request);
    
    await this.service.login(options)
  }
}
