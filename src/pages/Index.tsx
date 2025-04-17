
import { Link } from "react-router-dom";
import { ArrowRight, Paintbrush, Brush } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import ArtworkCard from "@/components/artworks/ArtworkCard";
import FeaturedArtwork from "@/components/artworks/FeaturedArtwork";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { artworks } from "@/data/artworks";

const Index = () => {
  const featuredArtwork = artworks.find((art) => art.featured) || artworks[0];
  const recentArtworks = artworks.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container px-4 py-10 mx-auto animate-fade-in">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-gothic italic tracking-tighter mb-4 text-foreground">
              <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Gothic Art</span> Portfolio
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto text-muted-foreground">
              Explore the shadows of imagination through digital art and illustrations
            </p>
          </div>

          {/* Featured Artwork */}
          <FeaturedArtwork artwork={featuredArtwork} />

          {/* Call to Action */}
          <div className="mt-8 text-center">
            <Link to="/gallery">
              <Button variant="gothic" size="lg" className="font-gothic italic">
                Explore Gallery <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>

        <Separator className="my-16 opacity-20" />

        {/* Recent Works */}
        <section className="container px-4 py-10 mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl md:text-3xl font-gothic italic">Recent Works</h2>
            <Link to="/gallery">
              <Button variant="gothicOutline">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            {recentArtworks.map((artwork) => (
              <ArtworkCard key={artwork.id} artwork={artwork} />
            ))}
          </div>
        </section>

        <Separator className="my-16 opacity-20" />

        {/* About Section */}
        <section className="container px-4 py-10 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl md:text-3xl font-gothic italic mb-4">About the Artist</h2>
              <p className="mb-4 text-muted-foreground">
                Crafting hauntingly beautiful digital art inspired by gothic architecture, 
                dark romanticism, and the beauty found in darkness.
              </p>
              <p className="mb-6 text-muted-foreground">
                Each piece is a portal into a world where shadows tell stories and moonlight 
                reveals hidden truths.
              </p>
              <Link to="/about">
                <Button variant="gothicOutline">
                  Learn More
                </Button>
              </Link>
            </div>
            <div className="order-1 md:order-2 flex justify-center md:justify-end">
              <div className="relative">
                <div className="w-16 h-16 absolute -top-6 -left-6 border-t border-l border-primary opacity-50" />
                <div className="rounded-md overflow-hidden gothic-border">
                  <div className="flex justify-center items-center h-64 w-64 bg-accent/20">
                    <Paintbrush className="h-12 w-12 text-primary animate-pulse-glow" />
                  </div>
                </div>
                <div className="w-16 h-16 absolute -bottom-6 -right-6 border-b border-r border-primary opacity-50" />
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="container px-4 py-16 mx-auto">
          <div className="rounded-lg gothic-border bg-card/30 backdrop-blur-sm p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-gothic italic mb-4">
              Interested in Custom Artwork?
            </h2>
            <p className="mb-6 max-w-lg mx-auto text-muted-foreground">
              Contact me for commissions, collaborations, or inquiries about purchasing prints.
            </p>
            <Link to="/contact">
              <Button variant="gothic" size="lg" className="font-gothic italic">
                Get in Touch
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
