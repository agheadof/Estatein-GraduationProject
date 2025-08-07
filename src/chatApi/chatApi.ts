const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
const apiUrl = import.meta.env.VITE_OPENAI_API_URL 
console.log("API KEY FROM ENV:", apiKey);

interface ChatResponse {
  success: boolean;
  message: string;
}

export const sendChatMessage = async (userMessage: string): Promise<ChatResponse> => {
  try {
    const res = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
{
  role: "system",
  content: `اجب عن كل شيئ باللهجة السورية`
},
          {
            role: "user",
            content: userMessage,
          },
        ],
      }),
    });

    if (!res.ok) throw new Error("API Error");

    const data = await res.json();
    const message = data.choices?.[0]?.message?.content ?? "Sorry, I couldn't generate a response.";
console.log("API KEY:", apiKey);

    return {
      success: true,
      message,
    };
  } catch (error) {
    console.error("Chat API Error:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    };
  }
};
