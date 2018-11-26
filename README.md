# trigger-twillio-call

A simple now.sh endpoint to trigger a predefined call.
I use that for call recordings.

## Setup
1. paste the provided twiML bin file to here https://www.twilio.com/console/runtime/twiml-bins/
2. setup the following secrets
``` sh
now secret add auth-key [auth-key]
now secret add to-number [to-number]
now secret add from-number [from-number]
now secret add sid [sid]
now secret add twiml-url [twiml-url]
```
3. deploy the function using `now`
4. record :)

