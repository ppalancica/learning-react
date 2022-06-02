import express from 'express';
import config from './config';
import apiRouter from './api';
// import fs from 'fs';
import sassMiddleware from "node-sass-middleware";
import path from 'path';

const server = express();

server.use(sassMiddleware({
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'public')
}));

// https://ejs.co/
// npm install -S ejs
server.set('view engine', 'ejs');

import './serverRender';

server.get('/', (req, res) => {
  //res.send('Hello Express');
  //res.render('index');
  res.render('index', {
    content: 'Hello Express and <em>EJS</em>!'
  });
});

server.use('/api', apiRouter); // http://localhost:8080/api returns {"data":[]}
server.use(express.static('public'));
// http://localhost:8080/about.html
/*server.get('/about.html', (req, res) => {
  // res.send('The about page');
  fs.readFile('./about.html', (err, data) => {
    res.send(data.toString());
  });
});
*/

// server.listen(config.port, config.host, () => {
server.listen(config.port, () => {
  console.info('Express listening on port: ', config.port);
});

/*import http from 'http';

const server = http.createServer();

server.listen(8080);

server.on('request', (req, res) => {
  res.write('Hello HTTP!\n');
  setTimeout(() => {
    res.write('I can stream!\n');
    res.end();
  }, 3000);
});
*/

/*import https from 'https';

https.get('https://www.google.com/', res => {
  console.log('Response status code: ', res.statusCode);

  res.on('data', chunk => {
    console.log(chunk.toString());
  });
});
*/

/*import config, { nodeEnv, logStars} from './config';

// import './config';

console.log(config, nodeEnv);

logStars('Function');
*/
