import { provide, plugin } from 'midway';
import jwt from 'simple-jwt';
import { LoginForm } from '../interface/login'

@provide()
class UserDao {
  @plugin()
  mysql;

  async login(options: LoginForm){
    // const result = await this.mysql.get('user');
    return 'result';
  }
}

export default UserDao;
