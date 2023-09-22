export class Logger {
    constructor() {
        this.logs = [];
    }
    static getInstance() {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }
    log(input) {
        console.log(input);
        this.logs.push({ log: input, date: new Date() });
    }
    getLogs() {
        return this.logs;
    }
}
