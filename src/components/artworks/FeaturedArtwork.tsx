
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ArtworkType } from "@/data/artworks";

interface FeaturedArtworkProps {
  artwork: ArtworkType;
}

const FeaturedArtwork = ({ artwork }: FeaturedArtworkProps) => {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <>
      <div className="group relative overflow-hidden rounded-lg gothic-border bg-card/40 backdrop-blur-sm min-h-[400px] sm:min-h-[500px]">
        <div className="absolute inset-0">
          <img
            src={artwork.imageUrl}
            alt={artwork.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
        </div>
        
        <div className="relative z-10 flex h-full flex-col justify-end p-6 sm:p-10">
          <div className="mb-1">
            <Badge variant="gothic">Featured</Badge>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-gothic italic mb-3 text-foreground">
            {artwork.title}
          </h2>
          
          <p className="mb-4 max-w-md text-base sm:text-lg text-muted-foreground">
            {artwork.description}
          </p>
          
          <Button
            variant="gothic"
            className="w-fit"
            onClick={() => setShowDialog(true)}
          >
            Explore <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="bg-card/95 backdrop-blur-md border-border/40 gothic-border max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-gothic italic text-primary">{artwork.title}</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Created on {new Date(artwork.createdAt).toLocaleDateString()}
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-md">
              <img
                src={artwork.imageUrl}
                alt={artwork.title}
                className="w-full h-auto object-cover"
              />
            </div>
            
            <div className="flex flex-col">
              <p className="mb-4">{artwork.description}</p>
              
              <div className="mb-4">
                <h4 className="font-gothic italic mb-2 text-primary">Categories</h4>
                <div className="flex flex-wrap gap-2">
                  {artwork.categories.map((category) => (
                    <Badge key={category} variant="gothic">
                      {category}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="mt-auto">
                <Button
                  variant="gothic"
                  className="w-full mt-4"
                  onClick={() => setShowDialog(false)}
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FeaturedArtwork;
