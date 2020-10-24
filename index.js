const getToken = require('./login')

var cron = require('node-cron');
 
cron.schedule('*/5 * * * *', () => {
    console.log('running every 5 mins');
    getToken((token) => {
        console.log(token);
        // console.log(sesionHash);
        // console.log(lastVisit);
    }
    );
}
);
