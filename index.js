const getToken = require('./login')

getToken(function (token) {
    console.log(token);
}
);