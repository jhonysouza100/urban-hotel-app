import config from "@/config";

interface User {
  id: number;
  username: string;
  email: string;
  picture: string;
}

interface Reviews {
  id: number;
  title: string;
  comment: string;
  rating: number;
  userId: number;
  user: User;
}

export async function getAllReviews(): Promise<Reviews[]> {
  try {
    const res = await fetch(`${config.BACKEND_REVIEWS_URL}` as string);

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    
    const data: Reviews[] = await res.json();

    return data;

  } catch (error) {
    console.error("Error fetching reviews:", error);
    return [] as any;
  }
}