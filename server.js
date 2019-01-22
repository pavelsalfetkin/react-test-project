import config from './config';
import apiIndexRouter from './api';
import serverRender from './serverRender';
import express from 'express';

const server = express();

server.set('view engine', 'ejs');

// request - HTTP запрос
// response - HTTP ответ

server.get('/', (req, res) => {
  serverRender()
    .then(({indexContent, indexData}) => {
      res.render('index', {
        indexContent,
        indexData
      });
    })
    .catch(console.error)
});

server.use('/api', apiIndexRouter);
server.use(express.static('public'));

server.listen(config.port, config.host, () => {
  console.info('Express listening on port ', config.port);
});