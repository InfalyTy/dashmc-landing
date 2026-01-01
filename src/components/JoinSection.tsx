import { Button } from "@/components/ui/button";
import { Copy, ExternalLink } from "lucide-react";
import { toast } from "sonner";

const steps = [
  {
    number: "01",
    title: "Abre Minecraft",
    description: "Inicia Minecraft Java Edition 1.20.x",
  },
  {
    number: "02",
    title: "Añade Servidor",
    description: "Ve a Multijugador → Añadir Servidor",
  },
  {
    number: "03",
    title: "Ingresa la IP",
    description: "Escribe mc.minedashn.net y haz clic en Listo",
  },
  {
    number: "04",
    title: "¡Juega!",
    description: "Haz doble clic en el servidor para empezar a jugar",
  },
];

const JoinSection = () => {
  const serverIP = "mc.minedashn.net";

  const copyIP = () => {
    navigator.clipboard.writeText(serverIP);
    toast.success("¡IP del servidor copiada!");
  };

  return (
    <section className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-pixel text-4xl md:text-5xl text-foreground mb-4">
            CÓMO <span className="text-primary text-glow">UNIRSE</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Empezar es fácil. Sigue estos simples pasos para unirte a miles de jugadores en DashMC Network.
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
          <h3 className="font-pixel text-3xl text-foreground mb-4">¿Listo para Jugar?</h3>
          <p className="text-muted-foreground mb-6">
            ¡Copia nuestra IP del servidor y entra directo a la acción!
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
              Copiar IP del Servidor
            </Button>
            <Button variant="heroOutline" size="lg">
              <ExternalLink className="w-5 h-5" />
              Ver Tienda
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
