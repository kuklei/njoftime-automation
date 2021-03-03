var request = require('request');
var request = request.defaults({ jar: true, followAllRedirects: true }); //cookies activation
require('dotenv').config();
fs = require('fs');
// const cheerio = require('cheerio');
// let token = 1;

const updatePosts = (cb) => {  //request is async so we pass a callback funtion that will be called when the call is finished.
  var login = {
    'method': 'POST',
    'url': 'https://www.njoftime.com/login.php?do=login',
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
  request(login, function () { //double function here is to ensure that cookies are set or otherwise we dont always get a login token (first request simply sets cookies)
    request(login, function (error, response) {
      if (error) throw new Error(error);
      // console.log(response.body);

      let token = response.body.match(/var SECURITYTOKEN = "(.*)";/);
      console.log(token[1]);
      if (!token[1]) throw new Error('No token received on login');

      // console.log(response.headers['set-cookie'].toString());
      //  const cookie = response.headers['set-cookie'].toString();
      //  const sesionHash = cookie.match(/vb_sessionhash=(.*?);/);
      //  const lastVisit = cookie.match(/vb_lastvisit=(.*?);/);
      //  cb(token[1], sesionHash[1], lastVisit[1]); //call is fishied so call the callback function with the value of the call
      //cb(token[1]);

      var backEnd = {
        'method': 'POST',
        'url': 'https://www.njoftime.com/editpost.php?do=updatepost&p=430270',
        'headers': {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:80.0) Gecko/20100101 Firefox/80.0',
          'Accept': 'text/html,application/xhtml xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
          'Accept-Language': 'en-US,en;q=0.5',
          'Content-Type': 'application/x-www-form-urlencoded',
          'Origin': 'https://www.njoftime.com',
          'DNT': '1',
          'Connection': 'keep-alive',
          'Referer': 'https://www.njoftime.com/editpost.php?p=430270&do=editpost',
          'Upgrade-Insecure-Requests': '1',
          'Pragma': 'no-cache'
        },
        form: {
          'title': 'Tirane, ofroj vend pune zhvillues / programues / developer FULL STACK NodeJS Angular',
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
          'message_backup': '[U]Kompania: [B]IVA Elektronik[/B][/U]\r\n        \r\n       [U]Pozicioni i punes: [/U][B][U]Full Stack Developer[/U][/B]\r\n       \r\n       Pershkrimi i vendit te punes:\r\n       Te ngreje dhe te manaxhoje RESTful Web Services me NodeJS duke perdorur NestJS si framework. Te kete njohuri ne arkitekturen dhe llogjiken e aplikimeve server-side dhe integrimit me front-end.  Te ndertoje module dinamike ne front-end duke perdorur Angular per gjenerimin e faqeve responsive per perdoruesit. Te ndikoje ne rritjen e performances te pjeses back-end te aplikacioneve dhe proceseve te punes. Te japi rezultate konkrete ne zgjidhjen e problemeve gjate procesit te punes ne ekip dhe te jete i apasionuar ne zhvillimin e aplikaconeve nga back-end deri ne front-end. Te kete experience pune ne, NodeJS (experienca me NestJS plus), Angular, TypeORM, TypeScript / JavaScript,  Git. Sql Server perben nje plus\r\n        \r\n       Detyra dhe pergjegjesi:\r\n       \r\n[LIST]\r\n[*]Te perfshihet dhe te marri pjese ne ciklin dhe fazat e zhvillimit te aplikacioneve. \r\n[*]Fokusi kryesor eshte ne zhvillimin dhe testimin e RESTful Web Services dhe konsumimi i tyre ne Front End. \r\n[*]Ndertimi i faqeve responsive ne front end duke perdorur praktikat me te mira ne Angular \r\n[*]Te suportoj dhe te ndihmoj pjesetaret e ekipit. \r\n[*]Te zhvilloj RESTful API funksionale dhe te qendrueshme. \r\n[*]Te zgjidhi problemetikat apo erroret qe shfaqin aplikacionet. \r\n[*]Te jete i afte te mesoj shpejt rreth teknologjive te reja. \r\n[*]Te jete I gatshem te implementoj praktikat me te mira te punes. \r\n[*]Te bashkepunoj me stafin per te optimizuar performancen e aplikacioneve dhe proceseve back-end. \r\n[/LIST]\r\n \r\n       Kerkesat dhe kualifikimet:\r\n       \r\n[LIST]\r\n[*]Te kuptoj arkitekturen e micro-service dhe RESTFul web-services. \r\n[*]Te ndertoj dhe te mirembaj RESTFul web-services. \r\n[*]Te kete experience ne Node.js frameworks (e.g. Express, Nestjs, Koa, Hapi) \r\n[*]Te kete experience ne Unit Testing. \r\n[*]Te shkruaj kod te testueshem, te qarte dhe te paster. \r\n[*]Te kete experience me front-end JavaScript frameworks (e.g.  Angular). \r\n[*]Te kuptoj teknikat dhe mjetet qe duhen gjate ciklit te zhvillimit te aplikacioneve dhe programeve. \r\n[*]Te jete efikas ne perpunimin dhe dizenjimin e kodit. \r\n[*]Te jete i afte te punoj individualisht por edhe ne grup. \r\n[*]Te zoteroj mire gjuhen Angleze. \r\n[/LIST]\r\nBenefitet\r\n\r\n[LIST]\r\n[*]Page baze kompetitive   Bonus per performance \r\n[*]Orar Fleksibel mengjesi. Shtune e Diele pushim \r\n[*]Mundesi pune dhe nga shtepia \r\n[*]Mundesi avancimi ne karriere \r\n[/LIST]\r\n\r\n       [B]Kontakt: [EMAIL="hr@ivaelektronik.com"]hr@ivaelektronik.com[/EMAIL][/B]',
          'message': '<u>Kompania: <strong>IVA Elektronik</strong></u><br>\r\n        <br>\r\n       <u>Pozicioni i punes: </u><strong><u>Full Stack Developer</u></strong><br>\r\n       <br>\r\n       Pershkrimi i vendit te punes:<br>\r\n       Te ngreje dhe te manaxhoje RESTful Web Services me NodeJS duke perdorur NestJS si framework. Te kete njohuri ne arkitekturen dhe llogjiken e aplikimeve server-side dhe integrimit me front-end.  Te ndertoje module dinamike ne front-end duke perdorur Angular per gjenerimin e faqeve responsive per perdoruesit. Te ndikoje ne rritjen e performances te pjeses back-end te aplikacioneve dhe proceseve te punes. Te japi rezultate konkrete ne zgjidhjen e problemeve gjate procesit te punes ne ekip dhe te jete i apasionuar ne zhvillimin e aplikaconeve nga back-end deri ne front-end. Te kete experience pune ne, NodeJS (experienca me NestJS plus), Angular, TypeORM, TypeScript / JavaScript,  Git. Sql Server perben nje plus<br>\r\n        <br>\r\n       Detyra dhe pergjegjesi:<br>\r\n       <ul><li style="">Te perfshihet dhe te marri pjese ne ciklin dhe fazat e zhvillimit te aplikacioneve.</li>\r\n<li style="">Fokusi kryesor eshte ne zhvillimin dhe testimin e RESTful Web Services dhe konsumimi i tyre ne Front End.</li>\r\n<li style="">Ndertimi i faqeve responsive ne front end duke perdorur praktikat me te mira ne Angular</li>\r\n<li style="">Te suportoj dhe te ndihmoj pjesetaret e ekipit.</li>\r\n<li style="">Te zhvilloj RESTful API funksionale dhe te qendrueshme.</li>\r\n<li style="">Te zgjidhi problemetikat apo erroret qe shfaqin aplikacionet.</li>\r\n<li style="">Te jete i afte te mesoj shpejt rreth teknologjive te reja.</li>\r\n<li style="">Te jete I gatshem te implementoj praktikat me te mira te punes.</li>\r\n<li style="">Te bashkepunoj me stafin per te optimizuar performancen e aplikacioneve dhe proceseve back-end. </li>\r\n</ul> <br>\r\n       Kerkesat dhe kualifikimet:<br>\r\n       <ul><li style="">Te kuptoj arkitekturen e micro-service dhe RESTFul web-services.</li>\r\n<li style="">Te ndertoj dhe te mirembaj RESTFul web-services.</li>\r\n<li style="">Te kete experience ne Node.js frameworks (e.g. Express, Nestjs, Koa, Hapi)</li>\r\n<li style="">Te kete experience ne Unit Testing.</li>\r\n<li style="">Te shkruaj kod te testueshem, te qarte dhe te paster.</li>\r\n<li style="">Te kete experience me front-end JavaScript frameworks (e.g.  Angular).</li>\r\n<li style="">Te kuptoj teknikat dhe mjetet qe duhen gjate ciklit te zhvillimit te aplikacioneve dhe programeve.</li>\r\n<li style="">Te jete efikas ne perpunimin dhe dizenjimin e kodit.</li>\r\n<li style="">Te jete i afte te punoj individualisht por edhe ne grup.</li>\r\n<li style="">Te zoteroj mire gjuhen Angleze. </li>\r\n</ul>Benefitet<br>\r\n<ul><li style="">Page baze kompetitive   Bonus per performance</li>\r\n<li style="">Orar Fleksibel mengjesi. Shtune e Diele pushim</li>\r\n<li style="">Mundesi pune dhe nga shtepia</li>\r\n<li style="">Mundesi avancimi ne karriere </li>\r\n</ul><br>\r\n       <strong>Kontakt: <a href="mailto:hr@ivaelektronik.com">hr@ivaelektronik.com</a></strong>',
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

      var frontEnd = {
        'method': 'POST',
        'url': 'https://www.njoftime.com/editpost.php?do=updatepost&p=430277',
        'headers': {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:80.0) Gecko/20100101 Firefox/80.0',
          'Accept': 'text/html,application/xhtml xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
          'Accept-Language': 'en-US,en;q=0.5',
          'Content-Type': 'application/x-www-form-urlencoded',
          'DNT': '1',
          'Connection': 'keep-alive',
          'Referer': 'https://www.njoftime.com/editpost.php?p=430277&do=editpost',
          'Upgrade-Insecure-Requests': '1',
          'Pragma': 'no-cache'
        },
        form: {
          'title': 'Tirane, ofroj vend pune zhvillues / programues / developer FRONT-END Web Apps ne Angular',
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
          'message_backup': `[U]Kompania: [/U][B]IVA Elektronik[/B]
      \n
      \n[U]Pozicioni i punes: [/U][B]Front-end WEB Developer[/B]
      \n
      \nPershkrimi i vendit te punes
      \n
      \nZhvillimi i Single Page Web Applications (SPA) ne Angluar, Bootstrap dhe Javascript. Te kete njohurite dhe aftesite te kombinoje UI Design me programimin dhe konsumimin e web serviceve.Te kete rol aktiv ne menyren si implementohet dizenjimi me pjesen teknike.Te percaktoj dhe te kuptoje si duhet te shfaqet aplikacioni sipas kerkesave se perdoruesve.Te optimizoje me eficence te plote te gjitha nderfaqet e aplikacioneve.
      \nKerkohet te punoj ne ekip se bashku me zhvilluesit back-end, per tu siguruar qe te gjithe elementet e krijimit te aplikacioneve jane te qendrueshme dhe sipas kerkesave.
      \n
      \nDetyra dhe pergjegjesi:
      \n
      \n
      \n
      \n[LIST]
      \n[*]Te realizoj teknikisht dizenjimin e UI/UX. 
      \n[*]Te percaktoj strukturen dhe dizenjimin e nderfaqeve te aplikacioneve. 
      \n[*]Te tregoj performance ne optimizim e aplikacionit. 
      \n[*]Te siguroj qe te gjitha inputet e perdoruesve te jene te vlefshme perpara se ti dergohen back-end. 
      \n[*]Te optimizoje nderfaqet e aplikacioneve te jene sa me modulare,fleksibel dhe scalable. 
      \n[/LIST]
      \n
      \nKerkesat dhe kualifikimet:
      \n
      \n
      \n
      \n[LIST]
      \n[*]Te kete njohuri ne Angular, Javascript, Bootstrap, CSS. 
      \n[*]Te jete i afte te mesoj shpejt rreth teknologjive me te reja. 
      \n[*]Te shkruaj kod te testueshm, te qarte dhe te paster. 
      \n[*]Te kete experience me konsumimin e RESTful web services. 
      \n[*]Te kete experience ne zhvillimin e aplikacioneve te cilet menaxhojne intesitet te dhenash. 
      \n[*]Te kete experience ne optimizim e kodit SPA Javasript. 
      \n[*]Te kuptoj server-side CSS. 
      \n[*]Te jete i afte te punoj individualisht por edhe ne grup. 
      \n[*]Te zoteroj mire gjuhen Angleze. Gjuhet e tjera perbejne avantazh. 
      \n[/LIST]
      \n
      \n[B]Kontakt: [/B][B][EMAIL="hr@ivaelektronik.com"]hr@ivaelektronik.com[/EMAIL][/B]`,
          'message': `<u>Kompania: </u><strong>IVA Elektronik</strong><br>
      \n<br>
      \n<u>Pozicioni i punes: </u><strong>Front-end WEB Developer</strong><br>
      \n<br>
      \nPershkrimi i vendit te punes<br>
      \n<br>
      \nZhvillimi i Single Page Web Applications (SPA) ne Angluar, Bootstrap dhe Javascript. Te kete njohurite dhe aftesite te kombinoje UI Design me programimin dhe konsumimin e web serviceve.Te kete rol aktiv ne menyren si implementohet dizenjimi me pjesen teknike.Te percaktoj dhe te kuptoje si duhet te shfaqet aplikacioni sipas kerkesave se perdoruesve.Te optimizoje me eficence te plote te gjitha nderfaqet e aplikacioneve.<br>
      \nKerkohet te punoj ne ekip se bashku me zhvilluesit back-end, per tu siguruar qe te gjithe elementet e krijimit te aplikacioneve jane te qendrueshme dhe sipas kerkesave.<br>
      \n<br>
      \nDetyra dhe pergjegjesi:<br>
      \n<br>
      \n<br>
      \n<ul><li style="">Te realizoj teknikisht dizenjimin e UI/UX.</li>
      \n<li style="">Te percaktoj strukturen dhe dizenjimin e nderfaqeve te aplikacioneve.</li>
      \n<li style="">Te tregoj performance ne optimizim e aplikacionit.</li>
      \n<li style="">Te siguroj qe te gjitha inputet e perdoruesve te jene te vlefshme perpara se ti dergohen back-end.</li>
      \n<li style="">Te optimizoje nderfaqet e aplikacioneve te jene sa me modulare,fleksibel dhe scalable.</li>
      \n</ul><br>
      \nKerkesat dhe kualifikimet:<br>
      \n<br>
      \n<br>
      \n<ul><li style="">Te kete njohuri ne Angular, Javascript, Bootstrap, CSS.</li>
      \n<li style="">Te jete i afte te mesoj shpejt rreth teknologjive me te reja.</li>
      \n<li style="">Te shkruaj kod te testueshm, te qarte dhe te paster.</li>
      \n<li style="">Te kete experience me konsumimin e RESTful web services.</li>
      \n<li style="">Te kete experience ne zhvillimin e aplikacioneve te cilet menaxhojne intesitet te dhenash.</li>
      \n<li style="">Te kete experience ne optimizim e kodit SPA Javasript.</li>
      \n<li style="">Te kuptoj server-side CSS.</li>
      \n<li style="">Te jete i afte te punoj individualisht por edhe ne grup.</li>
      \n<li style="">Te zoteroj mire gjuhen Angleze. Gjuhet e tjera perbejne avantazh.</li>
      \n</ul><br>
       \n<strong>Kontakt: </strong><strong><a href="mailto:hr@ivaelektronik.com">hr@ivaelektronik.com</a></strong>`,
          'wysiwyg': '1',
          'sbutton': 'publiko/aktualizo!',
          'signature': '1',
          'parseurl': '1',
          'emailupdate': '0',
          's': '',
          'securitytoken': `${token[1]}`,
          'do': 'updatepost',
          'p': '430277',
          'posthash': 'dda5d29ea03a4671a811f6e66ca32f3d',
          'poststarttime': '1603552267'
        }
      };

      var marketing = {
        'method': 'POST',
        'url': 'https://www.njoftime.com/editpost.php?do=updatepost&p=523228',
        'headers': {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:80.0) Gecko/20100101 Firefox/80.0',
          'Accept': 'text/html,application/xhtml xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
          'Accept-Language': 'en-US,en;q=0.5',
          'Content-Type': 'application/x-www-form-urlencoded',
          'Origin': 'https://www.njoftime.com',
          'DNT': '1',
          'Connection': 'keep-alive',
          'Referer': 'https://www.njoftime.com/editpost.php?p=523228&do=editpost',
          'Upgrade-Insecure-Requests': '1',
          'Pragma': 'no-cache'
        },
        form: {
          'title': 'Tirane, ofroj vend pune Agjent Shitje / Specialist Marketingu',
          'thread_fields_admin[]': '',
          'fields[2]': 'Shqiperi',
          'fields[3]': 'Tirane',
          'fields[9]': '10220',
          'fields[1]': '1',
          'fields[7]': '2701',
          'fields[8]': '2000',
          'fields[5]': '2',
          'fields[4]': 'mund edhe ta lini bosh',
          'thread_fields_admin[4]': '4',
          'thread_fields_admin[10]': 'Euro',
          'message_backup': '',
          'message': '<u>Kompania: <strong>IVA Elektronik</strong></u><br>\n<br>\n<u>Pozicioni i punes: <strong>Agjent Shitje / Specialist Marketingu     </strong></u><br>\nTe manaxhoje dhe te avancoje praktikat e marketingut dhe rritjen e bazes se klienteve te kompanise. Te propozoje dhe te zbatoje plane marketingu duke shfrytezuar kanalet egzistuese te shitjes dhe te gjeneroje kanale te reja komunikimi.<br>\n<br>\nDetyra dhe pergjegjesi:<br>\n<ul><li style="">Te kontaktoje me telefon ne perditshmeri klientet e rinj potencial me objektivin e gjenerimit te shitjeve.</li>\n<li style="">Te menaxhoje llogarite e kompanise ne mediat sociale si kanal i rendesishem shitje</li>\n<li style="">Te krijoje dhe te postoje materiale informative dhe promovuese ne rrjetet sociale per te rritur prezencen e kompanise dhe produkteve.</li>\n<li style="">Te ndjeki aktivitetin ne rrjetet sociale dhe te mbaj komunikim ne kohe reale me ndjeksit.</li>\n<li style="">Te monitoroje, analizoje dhe raportoje per performancen e mediave sociale e te sugjeroj menyra me efektive per rritjen e ketij kanali komunikimi.</li>\n<li style="">Te edukoje pjesen tjeter te stafit ne perdorimin e mediave sociale dhe te promovoje perdorimin e tyre brenda kompanise</li>\n<li style="">Te gjeneroje dhe te perditesoje permbajtjen e informacionit ne web-faqen zyrtare te kompanise</li>\n<li style="">Te propozoje, krijoje, manaxhoje dhe te ndjek zbatueshmerine e buxhetit vjetor per te gjitha aktivitetet marketing</li>\n<li style="">Te mbaje kontakt te vazhdueshem me distributoret dhe te garantoje qe jane ne nje linje me politikat e marketingut/imazhit te kompanise. Te sugjeroje teknika per zgjerimin e rrjetit te distributoreve.</li>\n<li style="">Te menaxhoje/implementoje kontratat marketing dhe te mbaje marredheniet me agjensite e reklamave si dhe mediat online/shtyp/TV/Radio, etj. Te negocioje per cmimet me te mira.</li>\n<li style="">Te ndertoje materialet e komunikimit te brendshem si dhe ato te jashtem.</li>\n<li style="">Panifikim strategjik dhe implementim per fushata Above the Line (ATL), Below the Line (BTL) dhe Through the Line (TTL). </li>\n</ul><br>\n<br>\nKerkesat dhe kualifikimet:<br>\n<ul><li style="">Te kete perfunduar shkollen e larte (preferohet Marketing, Ekonomik, Marredhenie me Publikun, Gazetari)</li>\n<li style="">Te kete experienca te mepareshme te ngjashme</li>\n<li style="">Te kete nivel profesional komunikimi verbal dhe drejteshkrimor.</li>\n<li style="">Njohuri te mira te platformave te rrjeteve sociale (FB, Instagram, LinkedIn, YouTube)</li>\n<li style="">Te jete i afte te punoj individualisht por edhe ne grup.</li>\n<li style="">Te jete proaktiv dhe te tregoje iniciative.</li>\n<li style="">Te zoteroj mire gjuhen Angleze. </li>\n</ul><br>\nPerbejne Avantazh:<br>\n<ul><li style="">Eksperience me Photo Editing/Graphic Design, Adobe Photoshop ose te ngjashme</li>\n<li style="">Eksperience me Video Editing, ShotCut ose te ngjashme.</li>\n<li style="">Eksperience me CRM</li>\n<li style="">Eksperience me WordPress</li>\n<li style="">Eksperience ne Call Center </li>\n</ul><br>\nBenefitet<ul><li style="">Page baze kompetitive + Bonus per cdo shitje</li>\n<li style="">Orar Fleksibel mengjesi. Shtune e Diele pushim</li>\n<li style="">Mundesi pune dhe nga shtepia</li>\n<li style="">Mundesi avancimi ne karriere </li>\n</ul><br>\n<strong>Kontakt: </strong><a href="mailto:hr@ivaelektronik.com"><strong>hr@ivaelektronik.com</strong></a><br>',
          'wysiwyg': '1',
          'signature': '1',
          'parseurl': '1',
          'emailupdate': '0',
          'sbutton': 'publiko/aktualizo!',
          's': '',
          'securitytoken': `${token[1]}`,
          'do': 'updatepost',
          'p': '523228',
          'posthash': 'efabacfbca51570fdd8e018b3715199b',
          'poststarttime': '1614878712'
        }
      };

      var flutter = {
        'method': 'POST',
        'url': 'https://www.njoftime.com/editpost.php?do=updatepost&p=430278',
        'headers': {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:80.0) Gecko/20100101 Firefox/80.0',
          'Accept': 'text/html,application/xhtml xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
          'Accept-Language': 'en-US,en;q=0.5',
          'Content-Type': 'application/x-www-form-urlencoded',
          'Origin': 'https://www.njoftime.com',
          'DNT': '1',
          'Connection': 'keep-alive',
          'Referer': 'https://www.njoftime.com/editpost.php?p=430278&do=editpost',
          'Upgrade-Insecure-Requests': '1',
          'Pragma': 'no-cache'
        },
        form: {
          'title': 'Tirane, ofroj vend pune zhvillues / programues / developer FLUTTER Cross Platform Mobile Apps',
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
          'message_backup': '[U]Kompania: [B]IVA Elektronik[/B][/U]\r\n \r\n[U]Pozicioni i punes: [B]Mobile Developer[/B][/U]\r\n \r\nPershkrimi i vendit te punes:\r\n\r\nKerkojme nje zhvillues Cross-Platform Mobile Developer qe perballon me sukses detyrat inxhinierike dhe te mirembajtjes.\r\nVleresojme kandidat te cilet kane aftesi bashkepunuese dhe kontribuojne ne dije dhe sugjerime rreth arkitektures se aplikacioneve dhe teknologjive mobile me te reja.\r\n \r\nDetyra dhe pergjegjesi:\r\n\r\n[LIST]\r\n[*]Te krijoj, mirembaj dhe te implementoj source code per te zhvilluar mobile apps te cilat plotesojne kerkesat e klientit. \r\n[*]Te fiksoj bugs dhe problemet ne performance e aplikacioneve. \r\n[*]Te shkruaj kod te testueshm, te qarte dhe te paster. \r\n[*]Te bashkepunoj me back-end developers, dizenjatoret dhe pjesen tjeter te ekipit per te dhene zgjidhje sa me efikase. \r\n[/LIST]\r\n \r\nKerkesat dhe kualifikimet:\r\n\r\n[LIST]\r\n[*]Te zhvilloj cross-platforms mobile apps. \r\n[*]Njohuri ne Flutter. \r\n[*]Njohuri ne konsumimin e RESTful Web Services. \r\n[*]Te implementoj user interface intuitive. \r\n[*]Te marri pjese ne zhvillimin e aplikacioneve dhe platformave te cilat i perkasin se ardhmes se procesve te punes ne kompani. \r\n[*]Te jete i afte te punoj individualisht por edhe ne grup. \r\n[*]Te zoteroj mire gjuhen Angleze. \r\n[/LIST]\r\n Benefitet\r\n\r\n[LIST]\r\n[*]Page baze kompetitive + Bonus per performance \r\n[*]Orar Fleksibel mengjesi. Shtune e Diele pushim \r\n[*]Mundesi pune dhe nga shtepia \r\n[*]Mundesi avancimi ne karriere \r\n[/LIST]\r\n\r\n[B]Kontakt: [EMAIL="hr@ivaelektronik.com"]hr@ivaelektronik.com[/EMAIL][/B]',
          'message': '<u>Kompania: <strong>IVA Elektronik</strong></u><br>\r\n <br>\r\n<u>Pozicioni i punes: <strong>Mobile Developer</strong></u><br>\r\n <br>\r\nPershkrimi i vendit te punes:<br>\r\n<br>\r\nKerkojme nje zhvillues Cross-Platform Mobile Developer qe perballon me sukses detyrat inxhinierike dhe te mirembajtjes.<br>\r\nVleresojme kandidat te cilet kane aftesi bashkepunuese dhe kontribuojne ne dije dhe sugjerime rreth arkitektures se aplikacioneve dhe teknologjive mobile me te reja.<br>\r\n <br>\r\nDetyra dhe pergjegjesi:<br>\r\n<ul><li style="">Te krijoj, mirembaj dhe te implementoj source code per te zhvilluar mobile apps te cilat plotesojne kerkesat e klientit.</li>\r\n<li style="">Te fiksoj bugs dhe problemet ne performance e aplikacioneve.</li>\r\n<li style="">Te shkruaj kod te testueshm, te qarte dhe te paster.</li>\r\n<li style="">Te bashkepunoj me back-end developers, dizenjatoret dhe pjesen tjeter te ekipit per te dhene zgjidhje sa me efikase. </li>\r\n</ul> <br>\r\nKerkesat dhe kualifikimet:<br>\r\n<ul><li style="">Te zhvilloj cross-platforms mobile apps.</li>\r\n<li style="">Njohuri ne Flutter.</li>\r\n<li style="">Njohuri ne konsumimin e RESTful Web Services.</li>\r\n<li style="">Te implementoj user interface intuitive.</li>\r\n<li style="">Te marri pjese ne zhvillimin e aplikacioneve dhe platformave te cilat i perkasin se ardhmes se procesve te punes ne kompani.</li>\r\n<li style="">Te jete i afte te punoj individualisht por edhe ne grup.</li>\r\n<li style="">Te zoteroj mire gjuhen Angleze. </li>\r\n</ul> Benefitet<br>\r\n<ul><li style="">Page baze kompetitive + Bonus per performance</li>\r\n<li style="">Orar Fleksibel mengjesi. Shtune e Diele pushim</li>\r\n<li style="">Mundesi pune dhe nga shtepia</li>\r\n<li style="">Mundesi avancimi ne karriere</li>\r\n</ul><br>\r\n<strong>Kontakt: <a href="mailto:hr@ivaelektronik.com">hr@ivaelektronik.com</a></strong>',
          'wysiwyg': '1',
          'sbutton': 'publiko/aktualizo!',
          'signature': '1',
          'parseurl': '1',
          'emailupdate': '0',
          's': '',
          'securitytoken': `${token[1]}`,
          'do': 'updatepost',
          'p': '430278',
          'posthash': '784fa1376af96e57fbb1696830afaa3e',
          'poststarttime': '1615410942'
        }
      };

      let terminate = false; //loop terminator if error occurs
      let timeout = process.env.timeoutSec || 30;
      let iterations = process.env.iterations || 2;
      (function myLoop(i) {
        setTimeout(function () { //calls the function after the specified timeout
          var time = new Date().toTimeString();
          console.log(`running ${i}: ${time}`);
          request(backEnd, function (error, response) {
            if (error) throw new Error(`Error when updating backEnd: ${error}`);
            fs.writeFile('backEnd.html', response.body, function (err) {
              if (err) return console.log(err);
            });

            // token = response.body.match(/var SECURITYTOKEN = "(.*)";/); //reset token here so login does not expire
            // console.log(`token updated: ${token[1]}`);
            var test = response.body.match(/security token was missing/);
            if (test) {
              console.log('backend was not updated. Aborting');
              terminate = true;
            }
          }); // end request

            //if backend is successful shoot also front end
          request(frontEnd, (error, response) => {
            if (error) throw new Error(`Error when updating frontEnd: ${error}`);
            //console.log('Updating fronEnd');
            fs.writeFile('frontEnd.html', response.body, function (err) {
              if (err) return console.log(err);
            });
            // token = response.body.match(/var SECURITYTOKEN = "(.*)";/); //reset token here so login does not expire
            // console.log(`token updated: ${token[1]}`);
            var test = response.body.match(/security token was missing/);
            if (test) {
              console.log('frontend was not updated. Aborting');
              terminate = true;
            }
          });

          request(marketing, (error, res) => {
            if (error) throw new Error(`Error when updating marketing: ${error}`);
            //console.log('Updating fronEnd');
            //console.log(response.body);
            fs.writeFile('marketing.html', res.body, function (err) {
              if (err) return console.log(err);
            });
            var test = res.body.match(/security token was missing/);
            if (test) {
              console.log('marketing was not updated. Aborting');
              terminate = true;
            }
          });
        
          request(flutter, (error, res) => {
            if (error) throw new Error(`Error when updating marketing: ${error}`);
            //console.log('Updating fronEnd');
            //console.log(response.body);
            fs.writeFile('flutter.html', res.body, function (err) {
              if (err) return console.log(err);
            });
            var test = res.body.match(/security token was missing/);
            if (test) {
              console.log('flutter was not updated. Aborting');
              terminate = true;
            }
          });

            // cb(token[1]);
          // }); // end request
          // console.log(i);
          if (--i && !terminate) myLoop(i);   //  decrement i and call myLoop again if i > 0
        }, timeout * 1000); // end setTimeout
      })(iterations);

    });
  });
};

module.exports = updatePosts;