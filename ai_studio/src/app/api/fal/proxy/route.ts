import { route } from "@fal-ai/server-proxy/nextjs";

// Re-export the route handlers with the correct model configuration
export const { GET, POST } = route; 