import { UrlsService } from '../services/urls.service.js';

const urlService = new UrlsService();

export class UrlsController {
    async foo(req, res, next) {
        try {
            const data = await urlService.dummy();
            res.status(200).json({
                sucess: true,
                message: '',
                data: data,
            });
        } catch (error) {
            next(error);
        }
    }
}
