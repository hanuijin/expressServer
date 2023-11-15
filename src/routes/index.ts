import express, { Router } from 'express';
import loginRoutes from './login/login';

const router: Router = express.Router();

// 다른 라우트 파일들을 불러옴
router.use('/login', loginRoutes);

export default router;
