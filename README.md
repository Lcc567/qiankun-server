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
