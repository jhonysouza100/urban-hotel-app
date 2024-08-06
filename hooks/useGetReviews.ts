import config from "@/config";
import Reviews from "@/interfaces/review.interface";

export async function getAllReviews(): Promise<Reviews[]> {
  try {
    const res = await fetch(`${config.BACKEND_REVIEWS_URL}` as string);
    console.log("Llmada a la API")

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