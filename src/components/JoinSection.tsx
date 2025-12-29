import { Button } from "@/components/ui/button";
import { Copy, ExternalLink } from "lucide-react";
import { toast } from "sonner";

const steps = [
  {
    number: "01",
    title: "Launch Minecraft",
    description: "Open Minecraft Java Edition 1.20.x",
  },
  {
    number: "02",
    title: "Add Server",
    description: "Go to Multiplayer → Add Server",
  },
  {
    number: "03",
    title: "Enter IP",
    description: "Type play.dashmc.net and click Done",
  },
  {
    number: "04",
    title: "Join & Play",
    description: "Double-click the server to start playing!",
  },
];

const JoinSection = () => {
  const serverIP = "play.dashmc.net";

  const copyIP = () => {
    navigator.clipboard.writeText(serverIP);
    toast.success("Server IP copied to clipboard!");
  };

  return (
    <section className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-pixel text-4xl md:text-5xl text-foreground mb-4">
            HOW TO <span className="text-primary text-glow">JOIN</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Getting started is easy. Follow these simple steps to join thousands of players on DashMC Network.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative group"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border z-0">
                  <div className="absolute inset-0 bg-primary/50 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                </div>
              )}
              
              <div className="gradient-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 relative z-10">
                <div className="font-pixel text-5xl text-primary/20 mb-2">{step.number}</div>
                <h3 className="font-pixel text-xl text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Box */}
        <div className="max-w-2xl mx-auto gradient-card border border-primary/30 rounded-2xl p-8 text-center box-glow">
          <h3 className="font-pixel text-3xl text-foreground mb-4">Ready to Play?</h3>
          <p className="text-muted-foreground mb-6">
            Copy our server IP and jump straight into the action!
          </p>
          
          <div 
            onClick={copyIP}
            className="inline-flex items-center gap-3 bg-background/50 border border-border rounded-lg px-8 py-4 mb-6 cursor-pointer hover:border-primary transition-colors group"
          >
            <span className="font-pixel text-3xl text-primary">{serverIP}</span>
            <Copy className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" onClick={copyIP}>
              Copy Server IP
            </Button>
            <Button variant="heroOutline" size="lg">
              <ExternalLink className="w-5 h-5" />
              View Store
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
