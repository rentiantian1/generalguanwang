const Base = require('./base.js');

module.exports = class extends Base {
  async indexAction() {
    let p = {};
    try {
      let rs = {};
      rs = await this.model("index").index(p);
      console.log(rs, '9999999999999')
      return this.success(rs);
    } catch (err) {
      return this.json({errno: 1, errmsg: '系统错误！' })
    }
  }

};
