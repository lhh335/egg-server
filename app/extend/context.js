/**
 * 此文件名必须为context.js
 */
module.exports = {
  get isIOS() {
    const iosReg = /iphone|ipad|ipod|Mac/i;
    console.log(this.get('user-agent', 'UA===='));
    return iosReg.test(this.get("user-agent"));
  },
};
