import { Button } from "@/components/ui/button";
import { Copy, Users, Gamepad2 } from "lucide-react";
import { toast } from "sonner";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const serverIP = "play.dashmc.net";

  const copyIP = () => {
    navigator.clipboard.writeText(serverIP);
    toast.success("Server IP copied to clipboard!");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-background/70 backdrop-blur-[2px]" />
      </div>

      {/* Animated particles overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-primary rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-primary rounded-full animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute bottom-1/3 right-1/2 w-1 h-1 bg-primary rounded-full animate-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-slide-up">
          {/* Logo/Title */}
          <h1 className="font-pixel text-6xl md:text-8xl lg:text-9xl text-foreground mb-4 tracking-wider">
            <span className="text-primary text-glow-intense">DASH</span>MC
          </h1>
          <p className="font-pixel text-2xl md:text-3xl text-primary mb-2 tracking-widest">
            NETWORK
          </p>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Experience Minecraft like never before. Join thousands of players in epic adventures across unique game modes.
          </p>

          {/* Server IP */}
          <div 
            onClick={copyIP}
            className="inline-flex items-center gap-3 bg-card/80 border border-border rounded-lg px-6 py-4 mb-8 cursor-pointer hover:border-primary/50 transition-colors group"
          >
            <span className="font-pixel text-2xl text-primary">{serverIP}</span>
            <Copy className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="xl" onClick={copyIP}>
              <Gamepad2 className="w-6 h-6" />
              Play Now
            </Button>
            <Button variant="heroOutline" size="xl">
              <Users className="w-6 h-6" />
              Discord
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="text-center">
              <p className="font-pixel text-4xl md:text-5xl text-primary text-glow">1,247</p>
              <p className="text-muted-foreground text-sm uppercase tracking-wider">Players Online</p>
            </div>
            <div className="text-center">
              <p className="font-pixel text-4xl md:text-5xl text-foreground">50K+</p>
              <p className="text-muted-foreground text-sm uppercase tracking-wider">Total Players</p>
            </div>
            <div className="text-center">
              <p className="font-pixel text-4xl md:text-5xl text-foreground">99.9%</p>
              <p className="text-muted-foreground text-sm uppercase tracking-wider">Uptime</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
