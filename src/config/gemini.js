
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({apiKey: "AIzaSyCYhSGDW_sIS5Udl8m0pynf3Bq2Bc-vgEk"});

async function run(prompt) {
    const chat = ai.chats.create({model: "gemini-2.5-flash"});

    let response = await chat.sendMessage({message:prompt});
    console.log(response.text);


    const history = await chat.getHistory();
    for (const message of history) {
        console.log(`role - ${message.role}: ${message.parts[0].text}`);
    }
        return response.text;
}
 export default run;


    