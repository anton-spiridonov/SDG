// api.js
export const registerUser = async (email: string, password: string) => {
  const response = await fetch("https://api.dating.com/identity", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error("Network response was not ok: " + response.statusText);
  }

  return response.json();
};
