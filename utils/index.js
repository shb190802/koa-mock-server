require('./lib_shb_date')
const guid = require('./guid')
const sleep = require('./sleep')

function resData(errorType, errorMsg) {
  return {
    state: errorType || 'ok',
    time: (new Date()).format('YYYY-MM-DD hh:mm:ss'),
    data: errorMsg || null
  }
}

module.exports = {
  resData,
  guid,
  sleep
}