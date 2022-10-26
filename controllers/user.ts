const User = require('../models/user.ts');
import { Request, Response } from 'express';

exports.loginUser = async (req: Request, res: Response) => {
  try {

  } catch (e) {
    res.status(500).send({res: 'Server Error', error: true});
  }
};