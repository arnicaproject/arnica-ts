

class HttpClient {
    private readonly baseUrl: string = "http://localhost:3000/"

    headers(): HeadersInit {
        return {
            'Content-Type': 'application/json',
        };
    }

    async post(url: string, body: any): Promise<Response> {
        const fullUrl = this.baseUrl + url

        const response = await fetch(fullUrl, {
            method: "POST",
            headers: this.headers(),
            body: JSON.stringify(body)
        });

        return response;
    }
}


export class PrimroseClient {
    private readonly apiKey: string // TODO
    private readonly client: HttpClient

    constructor(apiKey: string) {
        this.apiKey = apiKey;
        this.client = new HttpClient();
    }

    async login(username: string, password: string) {
        const body = {
            "email": username,
            "password": password
        };

        let result = await this.client.post("auth/loginUser", body);
        return result;
    }
}