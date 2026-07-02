const API_URL = "http://127.0.0.1:8000";

export async function generateScript(prompt) {
  const response = await fetch(`${API_URL}/generate-script`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to generate script");
  }

  return await response.json();
}