import express from 'express';
import dataUsers from './data/users';

const router = express.Router();

router.get('/users', (req, res) => {
  res.send(dataUsers);
});


export default router;