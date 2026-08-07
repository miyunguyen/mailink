import { UrlMapping } from '../models/urlMapping.model.js';

export class UrlsRepository {
    async create(data) {
        const url = await UrlMapping.create(data);
        return url;
    }

    async findById(data) {
        const url = await UrlMapping.findById(data);
        return url;
    }
}
