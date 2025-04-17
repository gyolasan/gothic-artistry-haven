
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Separator } from "@/components/ui/separator";
import { PenTool, Palette, LucideImagePlus, Layers } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container px-4 py-10 mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-gothic italic tracking-tighter mb-4">
            <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              About the Artist
            </span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto text-muted-foreground">
            The mind and process behind the gothic digital artistry
          </p>
        </div>

        {/* About Content */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-16 h-16 absolute -top-6 -left-6 border-t border-l border-primary opacity-50" />
              <div className="rounded-md overflow-hidden gothic-border w-64 h-64">
                {/* Replace with actual artist image if available */}
                <div className="flex justify-center items-center h-full w-full bg-accent/20">
                  <Palette className="h-16 w-16 text-primary animate-pulse-glow" />
                </div>
              </div>
              <div className="w-16 h-16 absolute -bottom-6 -right-6 border-b border-r border-primary opacity-50" />
            </div>
          </div>

          <div className="space-y-6 text-lg">
            <p>
              Welcome to my gothic digital art portfolio. I am a digital artist specializing in 
              dark, atmospheric pieces that explore the beauty found in shadows and mystique. 
              My work is heavily influenced by gothic architecture, dark romanticism, and the 
              folklore of ancient cultures.
            </p>
            
            <p>
              Each piece is created to evoke emotion and tell a story, inviting viewers to explore 
              worlds where reality blends with fantasy and beauty emerges from darkness. I use digital 
              painting techniques that combine traditional art principles with modern technology.
            </p>
            
            <Separator className="my-8 opacity-20" />
            
            <h2 className="text-2xl font-gothic italic text-primary">Artistic Philosophy</h2>
            <p>
              My art seeks to uncover the mysterious beauty in darkness, finding the delicate 
              balance between haunting and enchanting. I believe that darkness contains a unique 
              aesthetic value that reveals truths often hidden in the light.
            </p>
            
            <Separator className="my-8 opacity-20" />
            
            <h2 className="text-2xl font-gothic italic text-primary">Process & Techniques</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="p-4 gothic-border bg-card/30 backdrop-blur-sm rounded-md flex items-start space-x-3">
                <PenTool className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Digital Sketching</h3>
                  <p className="text-base text-muted-foreground">Starting with raw concepts and refining the core composition</p>
                </div>
              </div>
              
              <div className="p-4 gothic-border bg-card/30 backdrop-blur-sm rounded-md flex items-start space-x-3">
                <Layers className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Layered Depth</h3>
                  <p className="text-base text-muted-foreground">Building atmosphere through multiple layers of texture and light</p>
                </div>
              </div>
              
              <div className="p-4 gothic-border bg-card/30 backdrop-blur-sm rounded-md flex items-start space-x-3">
                <Palette className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Color Theory</h3>
                  <p className="text-base text-muted-foreground">Using restricted palettes to enhance mood and emotional impact</p>
                </div>
              </div>
              
              <div className="p-4 gothic-border bg-card/30 backdrop-blur-sm rounded-md flex items-start space-x-3">
                <LucideImagePlus className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Mixed Media</h3>
                  <p className="text-base text-muted-foreground">Combining traditional techniques with digital manipulation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
