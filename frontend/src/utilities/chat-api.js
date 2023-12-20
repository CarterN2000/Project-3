import config from '../config'

export async function index() {
    const res = await fetch(`${config.BASE_URL}/chats`, {method: 'GET'})
    if(res.ok) {
        return res.json()
    }
    else {
        throw new Error('invalid index request')
    }
}

export async function create(data) {
    try {
        const clientData = JSON.stringify(data);

        const res = await fetch(`${config.BASE_URL}/chats/apis`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: clientData
        });

        console.log("hit the api-module to send a new prompt to the server", data);
        console.log(res);

        if (res.ok) {
            return res.json();
        } else {
            console.error("Response not okay. Status:", res.status);
            const errorText = await res.text();
            console.error("Error text:", errorText);
            throw new Error("Invalid create request: Bad Parsing");
        }
    } catch (error) {
        console.error("Error in create function:", error);
        throw error;
    }
}