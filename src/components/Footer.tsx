import { MessageCircle, Twitter, Youtube, ShoppingBag } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    play: [
      { name: "Cómo Unirse", href: "#" },
      { name: "Reglas del Servidor", href: "#" },
      { name: "Vota por Nosotros", href: "#" },
      { name: "Estado del Servidor", href: "#" },
    ],
    community: [
      { name: "Discord", href: "#" },
      { name: "Foros", href: "#" },
      { name: "Aplicar para Staff", href: "#" },
      { name: "Reportar Jugador", href: "#" },
    ],
    support: [
      { name: "Tienda", href: "#" },
      { name: "Tickets de Soporte", href: "#" },
      { name: "Política de Reembolso", href: "#" },
      { name: "Términos de Servicio", href: "#" },
    ],
  };

  const socials = [
    { icon: MessageCircle, href: "#", label: "Discord" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: ShoppingBag, href: "#", label: "Tienda" },
  ];

  return (
    <footer className="border-t border-border bg-card/30">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-pixel text-3xl text-foreground mb-2">
              <span className="text-primary">DASH</span>MC
            </h3>
            <p className="text-muted-foreground mb-4 max-w-sm">
              La experiencia definitiva de servidor Minecraft. Únete a nuestra comunidad en crecimiento y explora aventuras sin fin.
            </p>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-pixel text-lg text-foreground mb-4">JUGAR</h4>
            <ul className="space-y-2">
              {links.play.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-pixel text-lg text-foreground mb-4">COMUNIDAD</h4>
            <ul className="space-y-2">
              {links.community.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-pixel text-lg text-foreground mb-4">SOPORTE</h4>
            <ul className="space-y-2">
              {links.support.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} DashMC Network. No afiliado con Mojang Studios.
          </p>
          <p className="text-muted-foreground text-sm">
            Minecraft Java Edition 1.20.x • mc.minedashn.net
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
