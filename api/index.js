import express from 'express';
import dataUsers from './data/users';

const router = express.Router();

// Объект маршрутизатора является изолированным экземпляром
// промежуточного программного обеспечения и маршрутов.
// Вы можете думать о нем как о «мини-приложении»,
// способном выполнять только функции промежуточного программного обеспечения
// и маршрутизации. Каждое приложение Express имеет встроенный маршрутизатор приложений.

router.get('/users', (req, res) => {
  res.send(dataUsers);
});

router.get('/users/:id', (req, res) => {
  // let data = dataUsers[req.params.id];
  res.send(dataUsers[req.params.id]);
});


export default router;