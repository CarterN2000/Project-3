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