var express = require('express');
var router = express.Router();
const request = require('request');

router.get('/', (req, res) => {
    request('https://dog.ceo/api/breeds/image/random', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            const data = JSON.parse(body);
            res.render('dog', { dogImage: data.message }); 
        } else {
            res.send("犬画像を取得できませんでした");
        }
    });
});

module.exports = router;

