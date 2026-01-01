import { Sword, Castle, Users, Trophy, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: Sword,
    title: "Supervivencia",
    description: "Experiencia de supervivencia clásica con encantamientos personalizados, habilidades McMMO y protección de terrenos.",
  },
  {
    icon: Castle,
    title: "Facciones",
    description: "Construye tu imperio, declara la guerra a tus enemigos y domina las clasificaciones.",
  },
  {
    icon: Users,
    title: "Skyblock",
    description: "Comienza en una isla flotante y expande tu mundo junto a tus amigos.",
  },
  {
    icon: Trophy,
    title: "Minijuegos",
    description: "Compite en BedWars, SkyWars y modos de juego rotativos semanales.",
  },
  {
    icon: Shield,
    title: "Anti-Cheat",
    description: "Sistemas de protección avanzados que aseguran el juego limpio para todos.",
  },
  {
    icon: Zap,
    title: "Baja Latencia",
    description: "Hardware premium con distribución de nodos mundial para una experiencia fluida.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-pixel text-4xl md:text-5xl text-foreground mb-4">
            MODOS DE <span className="text-primary text-glow">JUEGO</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Elige tu aventura de nuestra diversa selección de modos de juego, cada uno con características y comunidades únicas.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group gradient-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-pixel text-2xl text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
