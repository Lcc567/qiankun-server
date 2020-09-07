import { provide, plugin } from 'midway';
// import jwt from 'simple-jwt';

@provide()
class UserDao {
  // ctx: Context;
  // constructor(ctx: Context) {
  //   this.ctx = ctx;
  // }
  @plugin()
  mysql;

  async login() {
    const result = await this.mysql.get('user');
    console.log('-------', result);
    return result;
  }
}

export default UserDao;
