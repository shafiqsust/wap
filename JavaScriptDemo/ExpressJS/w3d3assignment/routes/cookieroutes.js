var express = require('express');
//var router = express.Router();

var cookieController = require('../controllers/myController');

const options = {
    "caseSensitive": false,
    "strict": false
    };

var router = express.Router(options);
    
router.get('/', cookieController.index);
router.get('/login', cookieController.getLogin);
router.get('/logout', cookieController.getLogout);
router.post('/process_login', cookieController.authUser);

// Cookie functions 
router.get('/cookie', cookieController.getCookies); // show the user input form
router.post('/cookie', cookieController.saveCookies); //Save cookies
router.get('/view', cookieController.viewCookies); // Display captures data/cookies

module.exports = router;