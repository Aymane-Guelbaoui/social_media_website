// frontend/lib/fetchPosts.js
export async function fetchPosts() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const clientKey = process.env.NEXT_PUBLIC_CLIENT_KEY;

  try {
    const response = await fetch(`${apiUrl}/api/posts/`, {
      headers: {
        "Authorization": `Bearer ${clientKey}`
      }
    });

    if (!response.ok) {
      throw new Error("Unauthorized or API error");
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Error fetching posts:", err);
    return null;
  }
}
