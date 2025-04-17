
import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ArtworkType } from "@/data/artworks";

interface ArtworkCardProps {
  artwork: ArtworkType;
  className?: string;
}

const ArtworkCard = ({ artwork, className }: ArtworkCardProps) => {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <>
      <Card className={`overflow-hidden bg-card/80 backdrop-blur-sm border-border/40 gothic-border art-card-hover ${className}`}>
        <CardContent className="p-0 relative">
          <div className="relative aspect-square w-full overflow-hidden">
            <img
              src={artwork.imageUrl}
              alt={artwork.title}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h3 className="text-xl font-gothic italic text-white mb-1">{artwork.title}</h3>
              <p className="text-sm text-white/80 line-clamp-2">{artwork.description}</p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-2 p-3">
          <div className="flex flex-wrap gap-1">
            {artwork.categories.slice(0, 2).map((category) => (
              <Badge key={category} variant="gothic" className="text-xs">
                {category}
              </Badge>
            ))}
            {artwork.categories.length > 2 && (
              <Badge variant="gothic" className="text-xs">
                +{artwork.categories.length - 2}
              </Badge>
            )}
          </div>
          <Button
            variant="gothicOutline"
            size="sm"
            className="w-full"
            onClick={() => setShowDialog(true)}
          >
            View Details
          </Button>
        </CardFooter>
      </Card>

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

export default ArtworkCard;
