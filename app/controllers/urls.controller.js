import { UrlsService } from '../services/urls.service.js';
import path from 'path';

const urlService = new UrlsService();

const hostUrl = process.env.HOST_URL || 'http://localhost:8080';

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

            try {
                const url = new URL(original_url);
            } catch (error) {
                res.send(`
                    <span class="text-danger">${original_url} is invalid URL, please check again!</span>
                `);
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
                custom_alias || null
            );

            const shortenUrl = `${hostUrl}/${response.shortenUrl}`;

            res.status(201).send(`
                <div class="form-row">
                    <label>
                        <span>Shorten URL </span>
                    </label>
                    <div class="row mb-3">
                        <input type="text" read-only value="${shortenUrl}" autofocus disabled>
                        <button type="button" class="copy-button" onclick="navigator.clipboard.writeText('${shortenUrl}')">Copy</button>
                    </div>
                </div>
            `);
        } catch (error) {
            next(error);
        }
    }

    async redirectUrl(req, res, next) {
        try {
            const alias = req.params.id;
            const response = await urlService.getUrlByAlias(alias);

            if (response) {
                await urlService.updateAnalytics(alias, response);
                res.status(302).redirect(response.original_url);
            } else {
                res.status(404).sendFile(
                    path.join(process.cwd(), 'public', '404.html')
                );
            }
        } catch (error) {
            next(error);
        }
    }

    async getUrlAnalytics(req, res, next) {
        try {
            const alias = req.params.id;
            const response = await urlService.getUrlByAlias(alias);
            res.status(200).json({
                sucess: true,
                message: 'Get URL analytics successfully',
                data: response,
            });
        } catch (error) {
            next(error);
        }
    }
}
