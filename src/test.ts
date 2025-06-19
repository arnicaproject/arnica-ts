import { PrimroseClient } from './api';

async function main() {
    const apiKey = "";
    const client = new PrimroseClient(apiKey);

    const response = await client.login(
        "ashton2@gmail.com", 
        "ashton123"
    );

    const data = await response.json();
    console.log(data);
}

// main();