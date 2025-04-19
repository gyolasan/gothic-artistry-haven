
export type ArtworkType = {
  id: string;
  title: string;
  description: string;
  image_url: string; // Changed from imageUrl to image_url to match Supabase schema
  categories: string[];
  featured: boolean;
  created_at: string; // Changed from createdAt to created_at to match Supabase schema
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

// Sample artworks for initial rendering before Supabase data loads
export const artworks: ArtworkType[] = [
  {
    id: "1",
    title: "Cosmic Warrior",
    description: "A haunting digital painting of a gothic cathedral silhouetted against a stormy night sky.",
    image_url: "/assets/art_files/Cosmic.png",
    categories: ["Architecture", "Night", "Gothic"],
    featured: true,
    created_at: new Date().toISOString(),
    user_id: "system"
  },
  {
    id: "2",
    title: "Divine Power",
    description: "Dark spirits moving through an ancient forest under moonlight.",
    image_url: "/assets/art_files/Divine.png",
    categories: ["Dark Fantasy", "Mystical"],
    featured: false,
    created_at: new Date().toISOString(),
    user_id: "system"
  },
  {
    id: "3",
    title: "Celestial Beauty",
    description: "Ancient stone structures standing against the test of time.",
    image_url: "/assets/art_files/Celestial.png",
    categories: ["Landscape", "Conceptual"],
    featured: false,
    created_at: new Date().toISOString(),
    user_id: "system"
  }
];
