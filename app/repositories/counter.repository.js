import { Counter } from '../models/counter.model.js';

export class CounterRepository {
    async getAtomicCounter(counterName) {
        const counter = await Counter.findOneAndUpdate(
            { _id: counterName },
            { $inc: { seq: 1 } },
            { upsert: true, returnDocument: 'after' }
        );
        return counter.seq;
    }
}
