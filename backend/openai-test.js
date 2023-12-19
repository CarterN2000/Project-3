const OpenAI = require('openai')
const openAiKey = require('./config/openKeys')

const openai = new OpenAI(openAiKey)
const prompt = "Help me write a hello world function in JS"

async function main(){
    const completion = await openai.chat.completions.create({
        messages: [
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": prompt}
        ],
        model: "gpt-3.5-turbo",
    })
    
    console.log(completion.choices[0].message.content)
}

main()