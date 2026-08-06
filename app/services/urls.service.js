import { UrlsRepository } from '../repositories/urls.repository.js';
import { Base64Helper } from '../helpers/base64.helper.js';
import { IdGeneratorService } from './idGenerator.service.js';

const urlRepo = new UrlsRepository();
const idGeneratorService = new IdGeneratorService();

export class UrlsService {
    async shortenUrl(original_url, custom_alias) {
        const uniqueId = await idGeneratorService.nextId();
        let alias = custom_alias;
        if (alias == null) {
            alias = Base64Helper.encode(uniqueId);
        }

        const url = await urlRepo.create({
            _id: Number(uniqueId),
            alias: alias,
            original_url: original_url,
        });

        return {
            shortenUrl: url.alias,
            original_url: url.original_url,
        };
    }

    async getAnalytics(alias) {
        return;
    }
}
