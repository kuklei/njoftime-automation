const getToken = require('./login')

getToken(function (token, sesionHash, lastVisit) {
    console.log(token);
    console.log(sesionHash);
    console.log(lastVisit);
}
);