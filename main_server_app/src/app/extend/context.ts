module.exports = {
  successReturn(data, msg = '成功') {
    this.body = {
      code: 200,
      data,
      msg
    };
  }
};
