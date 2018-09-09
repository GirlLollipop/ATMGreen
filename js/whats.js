let express = require('express');
let app = express();
const accountSid = 'AC007a6122fe849ef5bcb94e0eb70c3bf5';
const authToken = '3a203c551580b27ba5b224b938f4f1a0';
const client = require('twilio')(accountSid, authToken);

app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.listen(3000, function () {
  const sendMessage = () => {
  client.messages
      .create({
        body: 'Hola Mundo',
        from: 'whatsapp:+14155238886',
        to: 'whatsapp:+525559650719'
       })
      .then(message => console.log(message.sid)).
      done();
}
sendMessage();
});
// +14155238886
