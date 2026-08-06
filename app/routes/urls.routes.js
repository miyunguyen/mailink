import { Router } from 'express';
import { UrlsController } from '../controllers/urls.controller.js';

const router = Router();
const controller = new UrlsController();

router.get('/', (req, res, next) => controller.foo(req, res, next));

export default router;
