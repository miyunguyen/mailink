export class Base64Helper {
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
}
