var express = require('express');
var router = express.Router();
const moment = require('moment');

const userMessages = [
  {
    text: "Hi there. I am the Fastest Shinobi!",
    user: "Namikaze",
    added: moment().format('DD/MM/YYYY, HH:mm')
  },
  {
    text: "Hey, I just wanna relax & enjoy life.",
    user: "Shikamaru",
    added: moment().format('DD/MM/YYYY, HH:mm')
  },
  {
    text: "Hi, I am him!",
    user: "Kakashi",
    added: moment().format('DD/MM/YYYY, HH:mm')
  }
];

try {
  /* GET home page. */
  router.get('/', function (req, res, next) {
    res.render('index', { title: 'Legendary MessageBoard', userMessages: userMessages });
  });

  router.get('/new', (req, res, next) => {
    const ipAddress = req.ip;
    console.log('ipAddress', ipAddress, req.socket.remoteAddress);
    res.render('form', { title: 'User Form', ipAddress: ipAddress });
  });

  router.get('/weather', (req, res, next) => {
    res.json({ req: req.body });
  });

  router.post('/new', (req, res, next) => {
    console.log('Req----->', req.body);
    userMessages.push({
      text: req.body.userMessage,
      user: req.body.userName,
      added: moment().format('DD/MM/YYYY, HH:mm')
    });

    res.redirect('/');
  });
} catch (e) {
  console.log('Error------>', e.message);
}

module.exports = router;
