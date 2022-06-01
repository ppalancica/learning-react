import http from 'http';

const server = http.createServer();

server.listen(8080);

server.on('request', (req, res) => {
  res.write('Hello HTTP!\n');
  setTimeout(() => {
    res.write('I can stream!\n');
    res.end();
  }, 3000);
});

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
