var http = require("https");

module.exports = (req,res)=>{

var options = {
  "method": "POST",
  "hostname": "api.twilio.com",
  "port": null,
  "path": `/2010-04-01/Accounts/${process.env.TWIL_BIN}/Calls.json`,
  "headers": {
    "authorization": `Basic ${process.env.AUTH_KEY}`
  }
};

var twilReq = http.request(options, function (twilRes) {
  twilRes.on("end", function () {
    res.send('Making a call!');
  });
});

twilReq.write(`To=${process.env.TO_NUMBER}`);
twilReq.write(`From=${process.env.FROM_NUMBER}`);
twilReq.write(`Url=process.env.TWIML_URL`);
twilReq.write('Method=POST');
twilReq.write('Record=true');
twilReq.end();
}
