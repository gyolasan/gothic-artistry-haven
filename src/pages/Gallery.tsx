import { useState } from "react";
import { Link } from "react-router-dom";
import { Filter, X, ImagePlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Sheet, 
  SheetContent, 
  SheetDescription, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger 
} from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";
import ArtworkCard from "@/components/artworks/ArtworkCard";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { artworks, categories } from "@/data/artworks";
import { useAdmin } from "@/contexts/AdminContext";

const Gallery = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const { isAdmin } = useAdmin();

  const filteredArtworks = artworks.filter(artwork => {
    const matchesSearch = searchQuery === "" || 
      artwork.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      artwork.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategories = selectedCategories.length === 0 || 
      selectedCategories.some(cat => artwork.categories.includes(cat));
    
    return matchesSearch && matchesCategories;
  });

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container px-4 py-10 mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-gothic italic tracking-tighter mb-4">
            <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Artwork Gallery
            </span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto text-muted-foreground">
            Explore the complete collection of gothic digital art and illustrations
          </p>
        </div>

        {isAdmin && (
          <div className="mb-6 text-center">
            <Link to="/admin">
              <Button variant="gothic" className="flex items-center gap-2">
                <ImagePlus className="h-4 w-4" />
                Upload New Artwork
              </Button>
            </Link>
          </div>
        )}

        <div className="mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-2">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="gothic" className="flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    Filter
                  </Button>
                </SheetTrigger>
                <SheetContent className="bg-card/95 backdrop-blur-md border-border/40">
                  <SheetHeader>
                    <SheetTitle className="font-gothic italic">Filter Artworks</SheetTitle>
                    <SheetDescription>
                      Select categories to filter the gallery
                    </SheetDescription>
                  </SheetHeader>
                  <Separator className="my-4" />
                  <div className="mt-4 grid grid-cols-1 gap-3">
                    {categories.map((category) => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox 
                          id={`category-${category}`} 
                          checked={selectedCategories.includes(category)}
                          onCheckedChange={() => toggleCategory(category)}
                          className="border-primary data-[state=checked]:bg-primary"
                        />
                        <label
                          htmlFor={`category-${category}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Button variant="gothicOutline" onClick={clearFilters} className="w-full">
                      Clear Filters
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>

              <div className="flex flex-wrap items-center gap-2">
                {selectedCategories.map((category) => (
                  <Badge key={category} variant="gothic" className="flex items-center gap-1 animate-scale-in">
                    {category}
                    <X 
                      className="h-3 w-3 cursor-pointer" 
                      onClick={() => toggleCategory(category)}
                    />
                  </Badge>
                ))}
                {selectedCategories.length > 0 && (
                  <Button variant="ghost" size="sm" onClick={clearFilters} className="h-6">
                    Clear all
                  </Button>
                )}
              </div>
            </div>

            <div>
              <input
                type="text"
                placeholder="Search artworks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full md:w-64 px-3 py-2 rounded-md border border-border bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {filteredArtworks.length > 0 ? (
            filteredArtworks.map((artwork) => (
              <ArtworkCard key={artwork.id} artwork={artwork} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-xl text-muted-foreground">No artworks match your current filters</p>
              <Button variant="gothic" className="mt-4" onClick={clearFilters}>
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
