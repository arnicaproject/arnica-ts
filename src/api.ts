import { HttpClient, HttpResult, HttpRoutes } from "./http";

export class ArnicaClient {
    private readonly apiKey: string // TODO
    private readonly client: HttpClient

    constructor(apiKey: string) {
        this.apiKey = apiKey;
        this.client = new HttpClient();
    }

    async healthCheck(apiKey: string) {
        return await this.client.post(HttpRoutes.healthCheck, { "apiKey": apiKey });
    }

    async login(email: string, password: string): HttpResult {
        const body = {
            "email":    email,
            "password": password
        };

        return await this.client.post(HttpRoutes.loginUser, body);
    }

    async register(email: string, username: string, password: string): HttpResult {
        const body = {
            "email":    email,
            "username": username,
            "password": password
        };

        return await this.client.post(HttpRoutes.registerUser, body);
    }
}