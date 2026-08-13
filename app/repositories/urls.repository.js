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

    async findByAlias(data) {
        const url = await UrlMapping.findOne({ alias: data });
        return url;
    }

    async updateById(id, data) {
        await UrlMapping.findOneAndUpdate(
            { _id: id },
            {
                click_count: data.click_count,
                last_accessed: data.last_accessed,
            },
            { upsert: false }
        );
    }
}
