const geminiApiKey = "";  // 🔹 Replace with a valid Gemini API key
const huggingFaceApiKey = "";  // 🔹 Replace with a valid Hugging Face API key

document.getElementById("sendBtn").addEventListener("click", sendMessage);
document.getElementById("userInput").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

async function sendMessage() {
    const input = document.getElementById("userInput");
    const message = input.value.trim();
    if (message === "") return;

    displayMessage(message, "user");

    const botReply = await getBotResponse(message);
    displayMessage(botReply, "bot");

    input.value = "";
}

// 🔹 Function to get response from AI model
async function getBotResponse(input) {
    try {
        if (/stress|anxiety|motivation/i.test(input)) {
            return await getGeminiResponse(input);
        } else {
            return await getLlamaResponse(input);
        }
    } catch (error) {
        console.error("Error:", error);
        return "I'm here for you! Remember to take deep breaths and stay positive. 😊";
    }
}

// 🔹 Get response from Gemini AI
async function getGeminiResponse(input) {
    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${geminiApiKey}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                contents: [{ parts: [{ text: input }] }]
            })
        });

        const data = await response.json();
        console.log(data);  // ✅ Debugging: Check API response in the console

        if (data?.candidates?.[0]?.content?.parts?.[0]?.text) {
            return formatResponse(data.candidates[0].content.parts[0].text.trim());
        } else {
            return "I'm here to help! Stay strong and keep pushing forward. 😊";
        }
    } catch (error) {
        console.error("Error:", error);
        return "I'm here for you! Stay calm and take it one step at a time. 🌿";
    }
}

// 🔹 Get response from Hugging Face (Mistral-7B)
async function getLlamaResponse(input) {
    try {
        const response = await fetch("https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${huggingFaceApiKey}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ inputs: input })
        });

        const data = await response.json();
        console.log(data);  // ✅ Debugging: Check API response in the console

        if (data?.[0]?.generated_text) {
            return formatResponse(data[0].generated_text.trim());
        } else {
            return "I'm here to assist you! Keep going and never give up. 🚀";
        }
    } catch (error) {
        console.error("Error:", error);
        return "I'm here to help! Keep a positive mindset and stay focused. 🌟";
    }
}

// 🔹 Format bot responses for a calming and supportive tone
function formatResponse(response) {
    return `😊 ${response} \n\n Remember, you're doing great! Keep going. 🌟`;
}

// 🔹 Display messages in chat UI
function displayMessage(message, sender) {
    let chatBox = document.getElementById("chatBox");
    let messageDiv = document.createElement("div");
    messageDiv.classList.add("chat-message", sender);
    messageDiv.innerHTML = `<p>${message}</p>`;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}
