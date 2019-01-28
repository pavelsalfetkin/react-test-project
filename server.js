import config from './config';
import apiIndexRouter from './api';
import serverRender from './serverRender';
import express from 'express';

const server = express();

const path = ['/', '/card/:id'];

// Назначает имя настройки для значения
// С этими настройками express по умолчанию смотрит в папку /views и ищет там файлы *.ejs
server.set('view engine', 'ejs');


// Направляет HTTP-запросы GET на указанный путь с указанными функциями обратного вызова
// request - объект запроса
// response - объект ответа
server.get(path, (req, res) => {
  // console.log(req.params.id); // user1
  serverRender(req.params.id)
    .then(({indexContent, indexData}) => {
      console.log("indexContent - ", indexContent);
      console.log("indexData - ", indexData);
      // Returns the rendered HTML of a view via the callback function
      res.render('index', {
        indexContent,
        indexData
      });
    })
    .catch(console.error)
});


// Монтирует указанную функцию промежуточного программного обеспечения
// или функции по указанному пути: функция выполняется,
// когда база запрошенного пути совпадает с путем
server.use('/api', apiIndexRouter);
server.use(express.static('public'));


// Связывает и прослушивает соединения на указанном хосте и порте
server.listen(config.port, config.host, () => {
  console.info('Express listening on port ', config.port);
});