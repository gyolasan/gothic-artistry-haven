
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container px-4 flex items-center justify-center">
        <div className="text-center max-w-xl">
          <div className="relative mb-8">
            <h1 className="text-8xl md:text-9xl font-gothic italic text-primary opacity-20">404</h1>
            <h2 className="absolute inset-0 flex items-center justify-center text-2xl md:text-3xl font-gothic italic">
              Page Not Found
            </h2>
          </div>
          
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
            The artwork you're looking for seems to have vanished into the shadows...
          </p>
          
          <Link to="/">
            <Button variant="gothic" size="lg">
              Return to Gallery
            </Button>
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
