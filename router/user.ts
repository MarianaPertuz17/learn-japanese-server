import { Router } from "express";
const { loginUser } = require('../controllers/user.ts');

const router = Router();

router.get('/login', loginUser);
router.post('/login', loginUser);

export default router;