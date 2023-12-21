
import config from '../config'
const userId = "1a2b3c4d5e6f7a8b9c0d1e2f"


export async function index() {
  const res = await fetch(`${config.BASE_URL}/chats`, { method: "GET" });
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("invalid index request");
  }
}

export async function create(data) {
  try {
    const clientData = JSON.stringify(data);

    const res = await fetch(`${config.BASE_URL}/chats/apis`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: clientData,
    });

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

export async function deleteChat(chatId) {
  try {
    const response = await fetch(`${config.BASE_URL}/chats/apis/${chatId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`Delete request failed with status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error in deleteChat function:", error);
    throw error;
  }
}

export async function createChat(data) {
  try {
    const res = await fetch(`${config.BASE_URL}/chats`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      return res.json();
    } else {
      console.error("Response not okay. Status:", res.status);
      const errorText = await res.text();
      console.error("Error text:", errorText);
      throw new Error("Invalid createChat request: Bad Parsing");
    }
  } catch (error) {
    console.error("Error in createChat function:", error);
  }
}
