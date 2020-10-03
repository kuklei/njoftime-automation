var request = require('request');
var request = request.defaults({ jar: true, followAllRedirects: true }); //cookies activation
require('dotenv').config();
// const cheerio = require('cheerio');
// let token = 1;

const getToken = (cb) => {  //request is async so we pass a callback funtion that will be called when the call is finished.
  var login = {
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
      'Referer': 'http://www.njoftime.com',
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
  request(login, function () { //double function here is to ensure that cookies are set or otherwise we dont always get a login token (not sure why)
    request(login, function (error, response) {
      if (error) throw new Error(error);
      // console.log(response.body);
    
      let token = response.body.match(/var SECURITYTOKEN = "(.*)";/);
      // console.log(token);
      if (!token[1]) throw new Error('No token received on login');

      //  console.log(response.headers['set-cookie'].toString());
      //  const cookie = response.headers['set-cookie'].toString();
      //  const sesionHash = cookie.match(/vb_sessionhash=(.*?);/);
      //  const lastVisit = cookie.match(/vb_lastvisit=(.*?);/);
      //  cb(token[1], sesionHash[1], lastVisit[1]); //call is fishied so call the callback function with the value of the call
      // cb(token[1]);

      var backEnd = {
        'method': 'POST',
        'url': 'http://www.njoftime.com/editpost.php?do=updatepost&p=430270',
        'headers': {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:80.0) Gecko/20100101 Firefox/80.0',
          'Accept': 'text/html,application/xhtml xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
          'Accept-Language': 'en-US,en;q=0.5',
          'Content-Type': 'application/x-www-form-urlencoded',
          'Origin': 'http://www.njoftime.com',
          'DNT': '1',
          'Connection': 'keep-alive',
          'Referer': 'http://www.njoftime.com/editpost.php?p=430270&do=editpost',
          'Upgrade-Insecure-Requests': '1',
          'Pragma': 'no-cache'
        },
        form: {
          'title': 'Tirane, ofroj vend pune zhvillues / programues / developer BACK-END ne NodeJS me JavaScript / Typescript',
          'thread_fields_admin[]': '',
          'fields[2]': 'Shqiperi',
          'fields[3]': 'Tirane',
          'fields[9]': '10220',
          'fields[1]': '1',
          'fields[7]': '20',
          'fields[8]': '20',
          'fields[5]': '2',
          'fields[4]': 'mund edhe ta lini bosh',
          'thread_fields_admin[4]': '4',
          'thread_fields_admin[10]': 'Euro',
          'message_backup': `[U]Kompania: [B]IVA Elektronik[/B][/U]
      \n 
      \n[U]Pozicioni i punes: [/U][B][U]Back-end Developer[/U][/B]
      \n
      \nPershkrimi i vendit te punes:
      \nTe ngreje dhe te manaxhoje RESTful Web Services me NodeJS. Te kete njohuri ne arkitekturen dhe llogjiken e aplikimeve server-side dhe integrimit me front-end.  Te ndikoje ne rritjen e performances te pjeses back-end te aplikacioneve dhe proceseve te punes. Te japi rezultate konkrete ne zgjidhjen e problemeve gjate procesit te punes ne ekip dhe te jete i apasionuar ne zhvillimin e pjeses back-end te  aplikacioneve. Te kete experience pune ne, NodeJS, NestJS, TypeORM, TypeScript / JavaScript,  Git. Sql Server perben nje plus
      \n 
      \nDetyra dhe pergjegjesi:
      \n
      \n[LIST]
      \n[*]Te perfshihet dhe te marri pjese ne ciklin dhe fazat e zhvillimit te aplikacioneve. 
      \n[*]Fokusi kryesor eshte ne zhvillimin dhe testimin e RESTful Web Services. 
      \n[*]Bashkepunim me zhvilluesit e frond-end. 
      \n[*]Te suportoj dhe te ndihmoj pjesetaret e ekipit. 
      \n[*]Te zhvilloj RESTful API funksionale dhe te qendrueshme. 
      \n[*]Te zgjidhi problemetikat apo erroret qe shfaqin aplikacionet. 
      \n[*]Te jete i afte te mesoj shpejt rreth teknologjive te reja. 
      \n[*]Te jete I gatshem te implementoj praktikat me te mira te punes. 
      \n[*]Te bashkepunoj me stafin per te optimizuar performancen e aplikacioneve dhe proceseve back-end. 
      \n[/LIST]
      \n 
      \nKerkesat dhe kualifikimet:
      \n
      \n[LIST]
      \n[*]Te kuptoj arkitekturen e micro-service dhe RESTFul web-services. 
      \n[*]Te ndertoj dhe te mirembaj RESTFul web-services. 
      \n[*]Te kete experience ne Node.js frameworks (e.g. Express, Nestjs, Koa, Hapi) 
      \n[*]Te kete experience ne Unit Testing. 
      \n[*]Te shkruaj kod te testueshem, te qarte dhe te paster. 
      \n[*]Te kete experience me front-end JavaScript frameworks (e.g.  Angular). 
      \n[*]Te kuptoj teknikat dhe mjetet qe duhen gjate ciklit te zhvillimit te aplikacioneve dhe programeve. 
      \n[*]Te jete efikas ne perpunimin dhe dizenjimin e kodit. 
      \n[*]Te jete i afte te punoj individualisht por edhe ne grup. 
      \n[*]Te zoteroj mire gjuhen Angleze. Gjuhet e tjera perbejne avantazh. 
      \n[/LIST]
      \n
      \nReference ne linkedIN [URL]https://www.linkedin.com/company/18721717/[/URL]
      \nReference web: [URL="http://apps.ivaelektronik.com/"]apps.ivaelektronik.com[/URL] dhe [URL="http://ivaelektronik.com/"]ivaelektronik.com[/URL]
      \n[B]Kontakt: [EMAIL="hr@ivaelektronik.com"]hr@ivaelektronik.com[/EMAIL][/B]`,
          'message': `<u>Kompania: <strong>IVA Elektronik</strong></u><br>
      \n <br>
      \n<u>Pozicioni i punes: </u><strong><u>Back-end Developer</u></strong><br>
      \n<br>
      \nPershkrimi i vendit te punes:<br>
      \nTe ngreje dhe te manaxhoje RESTful Web Services me NodeJS. Te kete njohuri ne arkitekturen dhe llogjiken e aplikimeve server-side dhe integrimit me front-end.  Te ndikoje ne rritjen e performances te pjeses back-end te aplikacioneve dhe proceseve te punes. Te japi rezultate konkrete ne zgjidhjen e problemeve gjate procesit te punes ne ekip dhe te jete i apasionuar ne zhvillimin e pjeses back-end te  aplikacioneve. Te kete experience pune ne, NodeJS, NestJS, TypeORM, TypeScript / JavaScript,  Git. Sql Server perben nje plus<br>
      \n <br>
      \nDetyra dhe pergjegjesi:<br>
      \n<ul><li style="">Te perfshihet dhe te marri pjese ne ciklin dhe fazat e zhvillimit te aplikacioneve.</li>
      \n<li style="">Fokusi kryesor eshte ne zhvillimin dhe testimin e RESTful Web Services.</li>
      \n<li style="">Bashkepunim me zhvilluesit e frond-end.</li>
      \n<li style="">Te suportoj dhe te ndihmoj pjesetaret e ekipit.</li>
      \n<li style="">Te zhvilloj RESTful API funksionale dhe te qendrueshme.</li>
      \n<li style="">Te zgjidhi problemetikat apo erroret qe shfaqin aplikacionet.</li>
      \n<li style="">Te jete i afte te mesoj shpejt rreth teknologjive te reja.</li>
      \n<li style="">Te jete I gatshem te implementoj praktikat me te mira te punes.</li>
      \n<li style="">Te bashkepunoj me stafin per te optimizuar performancen e aplikacioneve dhe proceseve back-end. </li>
      \n</ul> <br>
      \nKerkesat dhe kualifikimet:<br>
      \n<ul><li style="">Te kuptoj arkitekturen e micro-service dhe RESTFul web-services.</li>
      \n<li style="">Te ndertoj dhe te mirembaj RESTFul web-services.</li>
      \n<li style="">Te kete experience ne Node.js frameworks (e.g. Express, Nestjs, Koa, Hapi)</li>
      \n<li style="">Te kete experience ne Unit Testing.</li>
      \n<li style="">Te shkruaj kod te testueshem, te qarte dhe te paster.</li>
      \n<li style="">Te kete experience me front-end JavaScript frameworks (e.g.  Angular).</li>
      \n<li style="">Te kuptoj teknikat dhe mjetet qe duhen gjate ciklit te zhvillimit te aplikacioneve dhe programeve.</li>
      \n<li style="">Te jete efikas ne perpunimin dhe dizenjimin e kodit.</li>
      \n<li style="">Te jete i afte te punoj individualisht por edhe ne grup.</li>
      \n<li style="">Te zoteroj mire gjuhen Angleze. Gjuhet e tjera perbejne avantazh. </li>
      \n</ul><br>
      \nReference ne linkedIN <a href="https://www.linkedin.com/company/18721717/" target="_blank">https://www.linkedin.com/company/18721717/</a><br>
      \nReference web: <a href="http://apps.ivaelektronik.com/" target="_blank">apps.ivaelektronik.com</a> dhe <a href="http://ivaelektronik.com/" target="_blank">ivaelektronik.com</a><br>
      \n<strong>Kontakt: <a href="mailto:hr@ivaelektronik.com">hr@ivaelektronik.com</a></strong>`,
          'wysiwyg': '1',
          'signature': '1',
          'parseurl': '1',
          'emailupdate': '0',
          'sbutton': 'publiko/aktualizo!',
          's': '',
          'securitytoken': `${token[1]}`,
          'do': 'updatepost',
          'p': '430270',
          'posthash': '84a0d0fd68e64a421016e1078e609b82',
          'poststarttime': '1601040955'
        }
      };

      let terminate = false; //loop terminator if error occurs
      let timeout = process.env.timeoutSec || 30;
      let iterations = process.env.iterations || 2;
      (function myLoop(i) {
        setTimeout(function () {
          var time = new Date().toTimeString();
          console.log(`running ${i}: ${time}`); 
          request(backEnd, function (error, response) {
            if (error) throw new Error(error);
            // console.log('1' + response.body);
            // console.log(op);
            // console.log(response);
            token = response.body.match(/var SECURITYTOKEN = "(.*)";/);
            console.log(`token updated: ${token[1]}`);
            var test = response.body.match(/security token was missing/);
            if (test) {
              console.log('Post was not updated. Aborting');
              terminate = true;          }
            // cb(token[1]);
          }); // end request
          // console.log(i);
          if (--i && !terminate) myLoop(i);   //  decrement i and call myLoop again if i > 0
        }, timeout * 1000) // end setTimeout
      })(iterations); 
      
    });
  });
};

module.exports = getToken;