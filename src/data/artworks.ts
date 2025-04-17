
export type ArtworkType = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  categories: string[];
  featured: boolean;
  createdAt: string;
};

// Sample artwork data - replace with your actual artwork
export const artworks: ArtworkType[] = [
  {
    id: "1",
    title: "Midnight Cathedral",
    description: "A haunting digital painting of a gothic cathedral under a full moon.",
    imageUrl: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
    categories: ["Digital Painting", "Architecture", "Night"],
    featured: true,
    createdAt: "2023-09-15"
  },
  {
    id: "2",
    title: "Ethereal Forest",
    description: "Misty forest with ghostly elements and dark atmosphere.",
    imageUrl: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    categories: ["Landscape", "Mystical", "Dark Fantasy"],
    featured: true,
    createdAt: "2023-10-20"
  },
  {
    id: "3",
    title: "The Ancient Bridge",
    description: "A mysterious stone bridge connecting two realms.",
    imageUrl: "https://images.unsplash.com/photo-1433086966358-54859d0ed716",
    categories: ["Architecture", "Fantasy", "Water"],
    featured: false,
    createdAt: "2023-11-05"
  },
  {
    id: "4",
    title: "Dark Dreams",
    description: "Abstract representation of nightmares and dark thoughts.",
    imageUrl: "https://images.unsplash.com/photo-1465101162946-4377e57745c3",
    categories: ["Abstract", "Dark", "Conceptual"],
    featured: false,
    createdAt: "2023-12-10"
  },
  {
    id: "5",
    title: "The Watchtower",
    description: "A lone watchtower overlooking a desolate landscape.",
    imageUrl: "https://images.unsplash.com/photo-1572464778069-939fa1657f2a",
    categories: ["Architecture", "Landscape", "Monochrome"],
    featured: true,
    createdAt: "2024-01-15"
  },
  {
    id: "6",
    title: "Phantom Queen",
    description: "Portrait of a ghostly queen from another era.",
    imageUrl: "https://images.unsplash.com/photo-1584535058895-0be31e8cbbae",
    categories: ["Portrait", "Character", "Fantasy"],
    featured: false,
    createdAt: "2024-02-20"
  }
];

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
  "Fantasy"
];
