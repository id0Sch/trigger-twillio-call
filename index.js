const request = require('request')

function myFunc (cb) {
  var options = {
    "uri": `https://api.twilio.com/2010-04-01/Accounts/${process.env.SID}/Calls.json`,
    "headers": {
      "authorization": `Basic ${process.env.AUTH_KEY}`
    },
    form: {
      'To': process.env.TO_NUMBER,
      'From': process.env.FROM_NUMBER,
      'Url': process.env.TWIML_URL,
      'Method': 'POST',
      'Record': true
    }
  };
  request.post(options, cb)
}

module.exports = async (_, res) => {
  myFunc(() => res.end('making a call'))
}