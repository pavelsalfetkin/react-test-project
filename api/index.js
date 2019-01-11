import express from 'express';
import users from '../src/data/users';

const router = express.Router();

router.get('/users', (req, res) => {
  res.send(users);
});

router.get('/data', (req, res) => {
  res.send({ data: "Hello Data" });
});

export default router;