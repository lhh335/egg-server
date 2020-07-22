/**
 * 该文件只能命名为helper.js
 */
const moment = require('moment');

exports.relativeTime = time => moment(new Date(time * 1000)).fromNow();
