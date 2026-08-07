export class Base62Helper {
    static BASE62_CHARS =
        '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    static encode(num) {
        if (num == 0n) {
            return this.BASE62_CHARS[0];
        }
        let encoding = '';
        while (num > 0n) {
            const reminder = num % 62n;
            encoding = this.BASE62_CHARS[reminder] + encoding;
            num /= 62n;
        }
        return encoding;
    }

    static decode(str) {
        let decoding = 0n;
        for (const char of str) {
            const index = this.BASE62_CHARS.indexOf(char);
            decoding = decoding * 62n + BigInt(index);
        }
        return Number(decoding);
    }
}
