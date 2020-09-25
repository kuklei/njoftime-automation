const request = require('request');
const cheerio = require('cheerio');
let token = 1;
const getToken = (cb) => {  //request is async so we pass a callback funtion that will be called when the call is finished.
  var options = {
  'method': 'POST',
  'url': 'http://www.njoftime.com/login.php?do=login',
  'headers': {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:80.0) Gecko/20100101 Firefox/80.0',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.5',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Origin': 'http://www.njoftime.com',
    'DNT': '1',
    'Connection': 'keep-alive',
    'Referer': 'http://www.njoftime.com/forum.php',
    'Cookie': 'vbulletin_collapse=; __auc=ce92736f174a0be9c971518072b; __asc=9d1cf8ef174bf1943d0606e2836; vb_sessionhash=30df6a4c8eaa211cca3967310ed3f93f; vb_lastvisit=1600934429; vb_lastactivity=0; vb_lastactivity=0; vb_lastvisit=1600934429; vb_sessionhash=b7ff9974d36a2ded2834067e44de9d83',
    'Upgrade-Insecure-Requests': '1'
  },
  form: {
    'vb_login_username': 'IVA-Elektronik',
    'vb_login_password': '123456',
    'vb_login_password_hint': 'Fjalekalimi',
    'cookieuser': '0',
    's': '',
    'securitytoken': 'guest',
    'do': 'login',
    'vb_login_md5password': 'e10adc3949ba59abbe56e057f20f883e',
    'vb_login_md5password_utf': 'e10adc3949ba59abbe56e057f20f883e'
  }
};
 request(options, function (error, response) {
    if (error) throw new Error(error);
    const $ = cheerio.load(response.body);
    const text = $.html(); // TODO there might be multiple script tags
    
    // find variable `x` in the text
    const X = text.match(/var SECURITYTOKEN = "(.*)";/);
    //console.log($("script").text()); // "Hello world"
    // console.log(response.body);
  // console.log(X[1]);
  // return X[1];
   cb(X[1]); //call is fishied so call the callback function with the value of the call
 });
};

module.exports = getToken;