export type HttpResult = Promise<Response | undefined>

export class HttpClient {
    private readonly baseUrl: string = "http://localhost:3000/"

    headers(): HeadersInit {
        return {
            'Content-Type': 'application/json',
        };
    }

    async post(url: string, body: any): HttpResult {
        try {
            const fullUrl = this.baseUrl + url

            const response = await fetch(fullUrl, {
                method: "POST",
                headers: this.headers(),
                body: JSON.stringify(body)
            });

            return response;
        } catch (ex) {
            console.log(ex);
            return undefined;
        }
    }
}

export class HttpRoutes {
    private static auth: string = "auth";
    private static system: string = "system";

    public static loginUser: string = `${this.auth}/loginUser`;
    public static registerUser: string = `${this.auth}/registerUser`;
    
    public static healthCheck: string = `${this.system}/healthCheck`;
}