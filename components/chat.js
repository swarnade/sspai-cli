import axios from "axios";

export default async function Chat(input, currentModel) {
    try {
        const response = await axios.post('https://sspai.swarnadeepsahapoddar.in/generate', {
            model: currentModel,
            input: input
        });

        return response.data.result;
    } catch (error) {
        return "Please Try Again Later";
    }
}
