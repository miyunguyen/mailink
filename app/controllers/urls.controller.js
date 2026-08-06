import { UrlsService } from '../services/urls.service.js';

const urlService = new UrlsService();

export class UrlsController {
    async shortenUrl(req, res, next) {
        try {
            const { original_url, custom_alias } = req.body;
            if (!original_url) {
                res.status(400).json({
                    sucess: false,
                    message: 'Required fields are missing!',
                    data: null,
                });
            }
            if (typeof original_url != 'string') {
                res.status(400).json({
                    sucess: false,
                    message: 'Invalid request',
                    data: null,
                });
            }

            if (custom_alias && typeof custom_alias != 'string') {
                res.status(400).json({
                    sucess: false,
                    message: 'Invalid request',
                    data: null,
                });
            }

            const response = await urlService.shortenUrl(
                original_url,
                custom_alias
            );

            res.status(201).json({
                sucess: true,
                message: 'Create short link successfully',
                data: response,
            });
        } catch (error) {
            next(error);
        }
    }
}
