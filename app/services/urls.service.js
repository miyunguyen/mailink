import { UrlsRepository } from '../repositories/urls.repository.js';
import { Base62Helper } from '../helpers/base62.helper.js';
import { IdGeneratorService } from './idGenerator.service.js';

const urlRepo = new UrlsRepository();
const idGeneratorService = new IdGeneratorService();

export class UrlsService {
    async shortenUrl(original_url, custom_alias) {
        const uniqueId = await idGeneratorService.nextId(); // generate an Id from Id Generator Service
        let alias = custom_alias;

        // if user not providing alias, use base62 to encode the id
        if (alias == null) {
            alias = Base62Helper.encode(uniqueId);
        }

        // Insert into the database
        const url = await urlRepo.create({
            _id: Number(uniqueId),
            alias: alias,
            original_url: original_url,
        });

        // Return the result
        return {
            shortenUrl: url.alias,
            original_url: url.original_url,
        };
    }

    async getAnalytics(alias) {
        return;
    }
}
