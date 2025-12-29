import { Sword, Castle, Users, Trophy, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: Sword,
    title: "Survival",
    description: "Classic survival experience with custom enchants, McMMO skills, and land claiming.",
  },
  {
    icon: Castle,
    title: "Factions",
    description: "Build your empire, wage war against enemies, and dominate the leaderboards.",
  },
  {
    icon: Users,
    title: "Skyblock",
    description: "Start on a floating island and expand your world with friends.",
  },
  {
    icon: Trophy,
    title: "Minigames",
    description: "Battle it out in BedWars, SkyWars, and weekly rotating game modes.",
  },
  {
    icon: Shield,
    title: "Anti-Cheat",
    description: "Advanced protection systems ensure fair play for everyone.",
  },
  {
    icon: Zap,
    title: "Low Latency",
    description: "Premium hardware with worldwide node distribution for smooth gameplay.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-pixel text-4xl md:text-5xl text-foreground mb-4">
            GAME <span className="text-primary text-glow">MODES</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose your adventure from our diverse selection of game modes, each with unique features and communities.
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
