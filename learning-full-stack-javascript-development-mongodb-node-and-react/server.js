import express from 'express';
import config from './config';
// import fs from 'fs';

const server = express();

server.get('/', (req, res) => {
  res.send('Hello Express');
});

server.use(express.static('public'));
/*server.get('/about.html', (req, res) => {
  // res.send('The about page');
  fs.readFile('./about.html', (err, data) => {
    res.send(data.toString());
  });
});
*/

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
