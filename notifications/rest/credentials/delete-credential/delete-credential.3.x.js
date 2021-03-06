// Download the Node helper library from www.twilio.com/docs/libraries/node#installation
// These identifiers are your accountSid and authToken from
// https://www.twilio.com/console
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

credentialSid = 'CRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';

client.notify
  .credentials(credentialSid)
  .remove(wasRemoved => {
    if (wasRemoved) {
      console.log('Credential ' + credentialSid + ' was removed.');
    }
  })
  .done();
