const updatePosts = require('./login')

var cron = require('node-cron');
 
// cron.schedule('* * * * *', () => {
//     console.log('running every 1 mins');
    updatePosts((token) => {
        //console.log(token);
        // console.log(sesionHash);
        // console.log(lastVisit);
    }
    );
// }
// );
