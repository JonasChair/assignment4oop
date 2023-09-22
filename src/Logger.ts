export class Logger {
    private static instance: Logger;
    private logs: LogType[] = [];
    private constructor() { }

    static getInstance() {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    log(input: string) {
        console.log(input);
        this.logs.push({ log: input, date: new Date() })
    }

    getLogs():LogType[]{
        return this.logs;
    }
}

type LogType = {
    log: string;
    date: Date;
}