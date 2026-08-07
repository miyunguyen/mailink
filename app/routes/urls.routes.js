import { Router } from 'express';
import { UrlsController } from '../controllers/urls.controller.js';

const router = Router();
const controller = new UrlsController();

router.post('/api/urls/shorten', (req, res, next) =>
    controller.shortenUrl(req, res, next)
);

router.get('/:id', (req, res, next) => controller.redirectUrl(req, res, next));

router.get('/api/urls/:id', (req, res, next) =>
    controller.getUrlAnalytics(req, res, next)
);

export default router;
