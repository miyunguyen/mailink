import { CounterRepository } from '../repositories/counter.repository.js';

export class IdGeneratorService {
    constructor() {
        this.machineId = 0;
        this.counterRepo = new CounterRepository();
    }

    async getNextSequence(counterName) {
        const sequence = await this.counterRepo.getAtomicCounter(counterName);
        return sequence;
    }

    async nextId() {
        let timestamp = Date.now();
        let sequence = await this.getNextSequence('url_id');

        const tsBinary = timestamp.toString(2).slice(-16).padStart(16, '0'); // 18 bit
        const machineBinary = this.machineId.toString(2).padStart(2, '0'); // 2 bit
        const seqBinary = sequence.toString(2).padStart(16, '0'); // 16 bit

        // 34 bit length
        const combinedBinary = `${tsBinary}${machineBinary}${seqBinary}`;

        const id = BigInt(`0b${combinedBinary}`);

        return id;
    }
}
