export class Alert {
    message: string;
    error: boolean;

    constructor(message: string, error: boolean) {
        this.message = message;
        this.error = error
    }
}