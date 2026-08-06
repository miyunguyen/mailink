import { Router } from 'express';
import { UrlsController } from '../controllers/urls.controller.js';

const router = Router();
const controller = new UrlsController();

router.post('/shorten', (req, res, next) =>
    controller.shortenUrl(req, res, next)
);

export default router;
