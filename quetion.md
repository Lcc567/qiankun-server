### navicat连接MySQL报错
Client does not support authentication protocol requested by server; consider upgrading MySQL client
- 进入mysql
- ALTER USER 'root' @'localhost' IDENTIFIED WITH mysql_native_password BY '密码';
- FLUSH PRIVILEGES;


### UserDao in class UserService in class UserController is not valid in current context

```
    @inject()
    UserDao: UserDao;
```

属性不能大写开头，改为

```
    @inject()
    userDao: UserDao;
```
