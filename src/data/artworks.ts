export type ArtworkType = {
  id: string;
  title: string;
  description: string;
  image_url: string;
  categories: string[];
  featured: boolean;
  created_at: string;
  user_id: string;
};

export const categories = [
  "Digital Painting",
  "Architecture",
  "Night",
  "Landscape",
  "Mystical",
  "Dark Fantasy",
  "Water",
  "Abstract",
  "Dark",
  "Conceptual",
  "Monochrome",
  "Portrait",
  "Character",
  "Fantasy",
  "Gothic",
  "Sky"
];
