import { UrlsRepository } from '../repositories/urls.repository.js';

const urlRepo = new UrlsRepository();

export class UrlsService {
    async dummy() {
        const data = {
            alias: 'Hello',
            original_url: 'cac',
            click_count: 10,
        };
        return urlRepo.create(data);
    }
    async shortenUrl(url) {
        return;
    }

    async getAnalytics(alias) {
        return;
    }
}
